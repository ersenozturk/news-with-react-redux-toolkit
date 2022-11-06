import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { findAllByTestId } from "@testing-library/react";

export default function Navbar() {
  const [user, setUser] = useState(true)
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
    setUser(false)
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2E3B55' }} >
        <Toolbar>
          <Typography
            onClick={()=>navigate("/")}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            News with Redux-Toolkit
          </Typography>
          {[] ? (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          ) : (
            <Button color="inherit" onClick={()=>navigate("/")}>Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
