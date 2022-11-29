import { Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import * as React from "react";

const ComparePage = (props) => {
    console.log(props.data);
  return (
    <div>
      {props.data ? (
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            marginTop: 15,
          }}
        >
          <Stack direction="row" gap={2} style={{ justifyContent: "center" }}>
            <CheckCircleIcon style={{ color: "green" }} fontSize="large" />
            <Typography variant="h4" gutterBottom color="green">
              Success!
            </Typography>
          </Stack>
          <Typography variant="subtitle1">
            The face in the uploaded image matches the photos in the agencies!
          </Typography>
        </div>
      ) : (
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            marginTop: 15,
          }}
        >
          <Stack direction="row" gap={2} style={{ justifyContent: "center" }}>
            <CloseIcon style={{ color: "red" }} fontSize="large" />
            <Typography variant="h4" gutterBottom color="red">
              Failure!
            </Typography>
          </Stack>
          <Typography variant="subtitle1">
            The face in the uploaded image does not match the photos in the
            agencies!
          </Typography>
        </div>
      )}
    </div>
  );
};

export default ComparePage;
