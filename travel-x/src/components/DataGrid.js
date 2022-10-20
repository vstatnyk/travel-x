import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { query } from "../server";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { LinearProgress } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import sample from "./download.png";
import { getImage } from "../GetImage";
//import { rgbToHex } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DataDisplay = (props) => {
  const [dmvData, setdmvData] = React.useState([]);
  const [ssData, setssData] = React.useState([]);
  const [dosData, setdosData] = React.useState([]);
  const [data, setData] = React.useState(null);
  const [dmvImageUrl, setdmvImageUrl] = React.useState([]);
  const [dosImageUrl, setdosImageUrl] = React.useState([]);

  const getData = async () => {
    try {
      await query(props.ssn).then(async (res) => {
        setdmvData(res.DMV);
        setssData(res.SS);
        setdosData(res.DOS);
        console.log(res.DMV.imageId)
        setdmvImageUrl(await getImage(res.DMV.imageId));
        setdosImageUrl(await getImage(res.DOS.imageId));
        setData(true);
      });
    } catch {
      setData(false);
      setdmvData("could not return any values");
      setssData("could not return any values");
      setdosData("could not return any values");
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  const dmvColumns = [
    {
      field: "name",
      headerName: "Full Name",
      width: 150,
      editable: true,
    },
    {
      field: "dob",
      headerName: "Date Of Birth",
      width: 150,
      editable: true,
    },
    {
      field: "dlNumber",
      headerName: "Driver's License Number",
      type: "number",
      width: 185,
      editable: true,
    },
  ];

  const dmvRows = [
    { id: 1, name: dmvData.name, dob: dmvData.dob, dlNumber: dmvData.dlNumber },
  ];

  const ssColumns = [
    {
      field: "name",
      headerName: "Full Name",
      width: 150,
      editable: true,
    },
    {
      field: "dob",
      headerName: "Date Of Birth",
      width: 150,
      editable: true,
    },
  ];

  const ssRows = [{ id: 1, name: ssData.name, dob: ssData.dob }];

  const dosColumns = [
    {
      field: "name",
      headerName: "Full Name",
      width: 150,
      editable: true,
    },
    {
      field: "dob",
      headerName: "Date Of Birth",
      width: 100,
      editable: true,
    },
    {
      field: "passportNumber",
      headerName: "Passport Number",
      type: "number",
      width: 145,
      editable: true,
    },
    {
      field: "passportExp",
      headerName: "Passport Expiration Date",
      width: 175,
      editable: true,
    },
  ];

  const dosRows = [
    {
      id: 1,
      name: dosData.name,
      dob: dosData.dob,
      passportNumber: dosData.passportNumber,
      passportExp: dosData.passportExp,
    },
  ];

  if (data) {
    return (
      // bgcolor: 'rgb(28,54,100)'
      <Box
        sx={{
          paddingLeft: "1%",
          paddingRight: "1%",
          width: "100%",
          mt: 3,
          position: "absolute",
          right:0,
          flexGrow: 100
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs direction="row">
            <div className="DepName">
              Department of Motor Vehicles
            </div>
            <Card sx={{ maxWidth: "100%" }}>
              <Typography
                variant="body1"
                color="text.primary"
                fontSize={40}
                textAlign="center"
              >
                {props.dept}
              </Typography>
              <CardMedia className = "position"
                component="img"
                image={dmvImageUrl}
                alt= "image Unavailable"
              />
              <CardContent>
                <Typography variant="body2" color="text.primary">
                  {props.text}
                  <Box>
                    <Item>    
                      <DataGrid
                        rows={dmvRows}
                        columns={dmvColumns}
                        components={{
                          LoadingOverlay: LinearProgress,
                        }}
                        loading={dmvData.isloading}
                        pageSize={100}
                        rowsPerPageOptions={[5]}
                        checkboxSelection={false}
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                        autoHeight
                      />
                    </Item>
                  </Box>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Edit data</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <div className="DepName">
              Social Security
            </div>
            <Card sx={{ maxWidth: "100%" }}>
              <Typography
                variant="body1"
                color="text.primary"
                fontSize={40}
                textAlign="center"
              >
                {props.dept}
              </Typography>
              <CardContent>
                <Typography variant="body2" color="text.primary">
                  {props.text}
                  <Box>
                    <Item>
                      <DataGrid
                        rows={ssRows}
                        columns={ssColumns}
                        components={{
                          LoadingOverlay: LinearProgress,
                        }}
                        loading={ssData.isloading}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection={false}
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                        autoHeight
                      />
                    </Item>
                  </Box>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Edit data</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs>
            <div className="DepName">
              Department Of State 
            </div>
            <Card sx={{ maxWidth: "100%" }}>
              <Typography
                variant="body1"
                color="text.primary"
                fontSize={40}
                textAlign="center"
              >
                {props.dept}
              </Typography>
              <CardMedia className = "position"
                component="img"
                image={dosImageUrl}
                alt="Image Unavailable"
              />
              <CardContent>
                <Typography variant="body2" color="text.primary">
                  {props.text}
                  <Box>
                    <Item>
                      <DataGrid
                        rows={dosRows}
                        columns={dosColumns}
                        components={{
                          LoadingOverlay: LinearProgress,
                        }}
                        loading={dosData.isloading}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection={false}
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                        autoHeight
                      />
                    </Item>
                  </Box>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Edit data</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  } 
  else if (data === false) {
    return (
      <div className="FailPerson">
        This person was not found in the database
        :(
      </div>
    );
  }

};

export default DataDisplay;
