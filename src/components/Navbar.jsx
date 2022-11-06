import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogOutFunc } from "../features/auth/authSlice";
// import { userLogInFunc } from "../features/auth/authSlice";

export default function Navbar() {
  // const {user} =  useSelector(state => state.auth)
  const user = useSelector((state) => state.auth.user); //user'a statelerden auth olanı bul onun initiaStatindekini al
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    navigate("/login");
    dispatch(userLogOutFunc())
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#2E3B55" }}>
        <Toolbar>
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            News with Redux-Toolkit
          </Typography>
          {user ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={() => navigate("/")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
