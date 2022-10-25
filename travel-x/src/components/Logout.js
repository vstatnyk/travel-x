import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Typography from "@mui/material/Typography";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Typography
      textAlign="center"
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </Typography>
  );
};

export default LogoutButton;
