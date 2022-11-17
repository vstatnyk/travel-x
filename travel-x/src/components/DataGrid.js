import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { query } from "../server";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import {
  Backdrop,
  CircularProgress,
  Divider,
  LinearProgress,
  Link,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getFile } from "../GetFile";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { updateEntity } from "../Update";
import Slide from "@mui/material/Slide";
import { width } from "@mui/system";
import arthasman from "./images/ArthasManifest.pdf";
import lionelman from "./images/LionelManifest.pdf";
import InputMask from "react-input-mask";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
//import { rgbToHex } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "whitesmoke",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms)); // Delay for specified amount of time(ms).

const DataDisplay = (props) => {
  const [dmvData, setdmvData] = React.useState([]);
  const [ssData, setssData] = React.useState([]);
  const [dosData, setdosData] = React.useState([]);
  const [data, setData] = React.useState(null);
  const [dmvImageUrl, setdmvImageUrl] = React.useState([]);
  const [dosImageUrl, setdosImageUrl] = React.useState([]);
  const [entityId, setEntityId] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [updateData, setUpdateData] = React.useState([]);
  const [dotData, setdotData] = React.useState([]);
  const [manifestUrl, setManifestUrl] = React.useState([]);
  const [maskDob, setMaskDob] = React.useState([]);
  const [maskDlNum, setMaskDlNum] = React.useState([]);
  const [maskPassNum, setMaskPassNum] = React.useState([]);
  const [maskPassExp, setMaskPassExp] = React.useState([]);
  const [maskName, setMaskName] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [backdropLoading, setBackdropLoading] = React.useState(true);

  const handleClickOpen = () => {
    setMaskName(dmvData.name);
    setMaskDob(dmvData.dob);
    setMaskDlNum(dmvData.dlNumber);
    setMaskPassNum(dosData.passportNumber);
    setMaskPassExp(dosData.passportExp);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = async () => {
    setLoading(true);
    updateEntity(entityId, updateData);
    await sleep(5000);
    setLoading(false);
    getData();
    handleClose();
  };

  const getData = React.useCallback(async () => {
    try {
      await query(props.ssn).then(async (res) => {
        setdmvData(res.DMV);
        setssData(res.SS);
        setdosData(res.DOS);
        setdmvImageUrl(await getFile(res.DMV.imageId));
        setdosImageUrl(await getFile(res.DOS.imageId));
        setData(true);
        setEntityId(res._id);
        setdotData(res.DOT);
        setManifestUrl(await getFile(res.DOT.manifest));
        console.log(manifestUrl);
        setMaskDob(res.DMV.dob);
        setMaskDlNum(res.DMV.dlNumber);
        setMaskPassNum(res.DOS.passportNumber);
        setMaskPassExp(res.DOS.passportExp);
        setMaskName(res.DMV.name);
        setUpdateData({
          name: res.DMV.name,
          dob: res.DMV.dob,
          dlNumber: res.DMV.dlNumber,
          passportNumber: res.DOS.passportNumber,
          passportExp: res.DOS.passportExp,
        });
        setBackdropLoading(false);
      });
    } catch {
      setData(false);
      setdmvData("could not return any values");
      setssData("could not return any values");
      setdosData("could not return any values");
    }
  }, [props.ssn, manifestUrl]);

  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="loadBar">
      {backdropLoading ? (
        <LinearProgress
          sx={{
            width: 300,
            backgroundColor: "#eedbc3",
            "& .MuiLinearProgress-bar": { backgroundColor: "burlywood" },
          }}
        />
      ) : (
        <div className="Breakdown">
          <div className="DMV_img">
            <Card sx={{ maxWidth: "100%" }}>
              <Typography
                variant="body1"
                color="text.primary"
                fontSize={40}
                textAlign="center"
              >
                {props.dept}
              </Typography>
              <CardMedia
                className="position"
                component="img"
                image={dmvImageUrl}
                alt="image Unavailable"
              />
            </Card>
          </div>
          <div className="PersonInfo">
            <Card elevation={15} sx={{ backgroundColor: "burlywood" }}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {dmvData.name}
                </Typography>
                <Stack
                  direction="column"
                  divider={
                    <Divider
                      orientation="horizontal"
                      flexItem
                      style={{ backgroundColor: "black" }}
                    />
                  }
                  spacing={2}
                >
                  <Item>Date of Birth: {dosData.dob}</Item>
                  <Item>Driver's License Number: {dmvData.dlNumber}</Item>
                  <Item>Passport Number: {dosData.passportNumber}</Item>
                  <Item>Passport Expiration Date: {dosData.passportExp}</Item>
                  <Item>Flight Departure Time: {dotData.departTime}</Item>
                  <Item>Flight Arrival Time: {dotData.arrivalTime}</Item>
                  <Item>Flight Number: {dotData.flightNum}</Item>
                  <Item>
                    <a href={manifestUrl}>Download Flight Manifest</a>
                  </Item>
                </Stack>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleClickOpen}>
                  Edit data
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Transition}
                >
                  <DialogTitle>Edit Data</DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Name"
                      fullWidth
                      variant="filled"
                      value={maskName}
                      onChange={(e) => {
                        let newValue = { name: e.target.value };
                        setUpdateData((updateData) => ({
                          ...updateData,
                          ...newValue,
                        }));
                        setMaskName(e.target.value);
                      }}
                    />
                    <InputMask
                      mask="99/99/9999"
                      maskChar=""
                      value={maskDob}
                      onChange={(e) => {
                        let newValue = { dob: e.target.value };
                        setUpdateData((updateData) => ({
                          ...updateData,
                          ...newValue,
                        }));
                        setMaskDob(e.target.value);
                      }}
                    >
                      {() => (
                        <TextField
                          autoFocus
                          margin="dense"
                          id="dob"
                          label="Date of Birth"
                          fullWidth
                          variant="filled"
                          placeholder="MM/DD/YYYY"
                        />
                      )}
                    </InputMask>
                    <InputMask
                      mask="999999999"
                      value={maskDlNum}
                      maskChar=""
                      onChange={(e) => {
                        let newValue = { dlNumber: e.target.value };
                        setUpdateData((updateData) => ({
                          ...updateData,
                          ...newValue,
                        }));
                        setMaskDlNum(e.target.value);
                      }}
                    >
                      {() => (
                        <TextField
                          autoFocus
                          margin="dense"
                          id="dlNumber"
                          label="Driver's License Number"
                          fullWidth
                          variant="filled"
                          placeholder="xxxxxxxxx"
                        />
                      )}
                    </InputMask>
                    <InputMask
                      mask="999999999"
                      value={maskPassNum}
                      maskChar=""
                      onChange={(e) => {
                        let newValue = { passportNumber: e.target.value };
                        setUpdateData((updateData) => ({
                          ...updateData,
                          ...newValue,
                        }));
                        setMaskPassNum(e.target.value);
                      }}
                    >
                      {() => (
                        <TextField
                          autoFocus
                          margin="dense"
                          id="passportNumber"
                          label="Passport Number"
                          fullWidth
                          variant="filled"
                          placeholder="xxxxxxxxx"
                        />
                      )}
                    </InputMask>
                    <InputMask
                      mask="99/99/9999"
                      value={maskPassExp}
                      maskChar=""
                      onChange={(e) => {
                        let newValue = { passportExp: e.target.value };
                        setUpdateData((updateData) => ({
                          ...updateData,
                          ...newValue,
                        }));
                        setMaskPassExp(e.target.value);
                      }}
                    >
                      {() => (
                        <TextField
                          autoFocus
                          margin="dense"
                          id="passportExp"
                          label="Passport Expiration Date"
                          fullWidth
                          variant="filled"
                          placeholder="MM/DD/YYYY"
                        />
                      )}
                    </InputMask>
                  </DialogContent>
                  <DialogActions>
                    <Button size="large" onClick={handleClose}>
                      Cancel
                    </Button>
                    <LoadingButton
                      size="large"
                      onClick={handleUpdate}
                      loading={loading}
                      startIcon={<SaveIcon />}
                      loadingPosition="start"
                    >
                      Save
                    </LoadingButton>
                  </DialogActions>
                </Dialog>
              </CardActions>
            </Card>
          </div>
          <div className="DOS_img">
            <Card sx={{ maxWidth: "100%" }}>
              <Typography
                variant="body1"
                color="text.primary"
                fontSize={40}
                textAlign="center"
              >
                {props.dept}
              </Typography>
              <CardMedia
                className="position"
                component="img"
                image={dosImageUrl}
                alt="image Unavailable"
              />
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataDisplay;