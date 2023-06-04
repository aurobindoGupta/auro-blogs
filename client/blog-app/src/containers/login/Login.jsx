import { useRef, useState } from "react";
import NavBar from "../../components/NavBar";
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
  const loginEmail = useRef(null);
  const loginPassword = useRef(null);
  const signupName = useRef(null);
  const signupEmail = useRef(null);
  const signupPassword = useRef(null);

  const renderSignupForm = () => {
    return (
      <Box
        component="form"
        id="signupForm"
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
          inputRef={signupName}
          id="Signup Name"
          label="Name"
          variant="filled"
          inputProps={{
            value: null,
          }}
        />
        <TextField
          inputRef={signupEmail}
          id="Signup Password"
          label="Email"
          variant="filled"
        />
        <TextField
          inputRef={signupPassword}
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
            onClick={(e) => handleSignup(e)}
          >
            Sign Up
            <ContactsIcon sx={{ mx: 1 }} />
          </Button>

          <Button
            variant="outlined"
            sx={{ flex: 1 }}
            onClick={() => setDisplayForm((prev) => !prev)}
          >
            Logged In ?
          </Button>
        </Box>
      </Box>
    );
  };
  const handleSignup = (e) => {
    e.preventDefault();
    const email = signupEmail.current.value;
    const password = signupPassword.current.value;
    const name = signupName.current.value;
    console.log(name, email, password);
    console.log(validator.isEmail(email), validator.isStrongPassword(password));
    if (!validator.isLength(name, { min: 1, max: 8 })) {
      alert("name should have between 2-15 characters");
    }
    if (!validator.isEmail(email)) {
      alert("Email Error; eg: name@email.com");
    }
    if (!validator.isStrongPassword(password)) {
      alert(
        "Password should contain => minLength:8, minLowercase:1,minUppercase:1, minNumbers:1, minSymbols:1"
      );
    }

    signupName.current.value = null;
    signupEmail.current.value = null;
    signupPassword.current.value = null;
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
        id="loginForm"
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
            onClick={() => {
              setDisplayForm((prev) => !prev);
            }}
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
    const email = loginEmail.current.value;
    const password = loginPassword.current.value;
    console.log(email, password);
    console.log(validator.isEmail(email), validator.isStrongPassword(password));
    if (!validator.isEmail(loginEmail.current.value)) {
      alert("Email Error; eg: name@email.com");
    }
    if (!validator.isStrongPassword(loginPassword.current.value)) {
      alert(
        "Password should contain => minLength:8, minLowercase:1,minUppercase:1, minNumbers:1, minSymbols:1"
      );
    }
    loginEmail.current.value = null;
    loginPassword.current.value = null;
  };

  return (
    <>
      <Container
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:'space-evenly'
        }}
      >
        <NavBar />
        <Box sx={{justifyContent:'center'}}>{displayform ? renderLoginForm() : renderSignupForm()}</Box>
      </Container>
    </>
  );
};
export default Login;
