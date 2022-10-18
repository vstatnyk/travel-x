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

  const getData = async () => {
    try {
      await query(props.ssn).then((res) => {
        setdmvData(res.DMV);
        setssData(res.SS);
        setdosData(res.DOS);
      });
    } catch {
      setdmvData("could not return any values");
      setssData("could not return any values");
      setdosData("could not return any values");
    }
  };

  React.useEffect(() => {
    getData();
  });

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

  if (typeof data != "string") {
    return (
      // bgcolor: 'rgb(28,54,100)'
      <Box
        sx={{
          paddingLeft: 10,
          paddingRight: 10,
          width: "100%",
          mt: 3,
          position: "fixed",
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs direction="row">
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
                component="img"
                height="500"
                image={sample}
                alt="id_photo"
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
          <Grid item xs={4}>
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
                component="img"
                height="500"
                image={sample}
                alt="id_photo"
              />
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
                component="img"
                height="500"
                image={sample}
                alt="id_photo"
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
  } else {
    return (
      <div className="ErrorReturn">this person was not found in database</div>
    );
  }
};

export default DataDisplay;
