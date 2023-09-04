//material UI
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
//axios
import axios from "axios";
//redux toolkit
import { useDispatch, useSelector } from "react-redux";
import { pass, user , ticket } from "../../features/UserPass/UserPassSlice";
// react router dom
import { useNavigate } from "react-router-dom";
//toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "../Toasts";



const LoginPage = () => {
  const dispatch = useDispatch();
  const { username, password } = useSelector((state) => state.userPass);
  const navigate = useNavigate();

  const handleLogin = () => {
    //send username and password to API by axois
    axios
      .post("http://shserver.top:8080/test/users/login", {
        uname: username,
        pass: password,
      })
      .then((response) => {
        const Ticket = response.data.ticket;
        dispatch(ticket(Ticket));
        notify("success" , "You will be directed to Home page")
        setTimeout(() => {
          navigate("/Home");
        }, 3000);
      })
      .catch(() => notify("error" , "Please Enter Valid UserName Or Password"));
  };

  return (
    <Container
      maxWidth="xs"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={5} sx={{ padding: "1rem" }}>
        <Typography variant="h5" align="center">
          Login
        </Typography>
        <form>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => dispatch(user(e.target.value))}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => dispatch(pass(e.target.value))}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{marginTop:"1rem"}}
          >
            Login
          </Button>
        </form>
      </Paper>
      <ToastContainer theme="dark" autoClose={2000} />
    </Container>
  );
};

export default LoginPage;
