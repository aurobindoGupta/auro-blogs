import { useRef, useState } from "react";
import {
  Box,
  TextField,
  Container,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ContactsIcon from "@mui/icons-material/Contacts";
import validator from "validator";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [displayform, setDisplayForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const loginEmail = useRef("");
  const loginPassword = useRef(null);

  const renderSignupForm = () => {
    return (
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          m: 2,
          width: "30rem",
          justifyContent: "center",
          alignItem: "center",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <TextField id="filled-basic" label="Name" variant="filled" />
        <TextField id="filled-basic" label="Email" variant="filled" />
        <TextField
          id="filled-password-input"
          label="Password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          variant="filled"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ width: "100%", display: "flex" }}>
          <Button
            variant="contained"
            sx={{ flex: 1 }}
            onClick={() => setDisplayForm((prev) => !prev)}
          >
            Logged In ?
          </Button>
          <Button variant="outlined" sx={{ flex: 1 }}>
            Sign Up
            <ContactsIcon sx={{ mx: 1 }} />
          </Button>
        </Box>
      </Box>
    );
  };
  const renderLoginForm = () => {
    return (
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          m: 2,
          width: "30rem",
          justifyContent: "center",
          alignItem: "center",

          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <TextField
          inputRef={loginEmail}
          id="filled-basic"
          label="Email"
          variant="filled"
        />
        <TextField
          inputRef={loginPassword}
          id="filled-password-input"
          label="Password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          variant="filled"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ width: "100%", display: "flex" }}>
          <Button
            variant="contained"
            sx={{ flex: 1 }}
            onClick={(e) => handleLogin(e)}
          >
            Login <LoginIcon sx={{ mx: 1 }} />
          </Button>
          <Button
            variant="outlined"
            sx={{ flex: 1 }}
            onClick={() => setDisplayForm((prev) => !prev)}
          >
            Sign Up
            <ContactsIcon sx={{ mx: 1 }} />
          </Button>
        </Box>
      </Box>
    );
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginEmail.current.value, loginPassword.current.value);
    console.log(
      validator.isEmail(loginEmail.current.value),
      validator.isStrongPassword(loginPassword.current.value)
    );
  };
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ height: "100%", display: "flex", alignItems: "center" }}
      >
        {displayform ? renderLoginForm() : renderSignupForm()}
      </Container>
    </>
  );
};
export default Login;
