import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Typography from "@mui/material/Typography";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Typography
      textAlign="center"
      //variant='text'
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Typography>
  );
};

export default LoginButton;
