import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/home/Home.jsx";
import Login from "./containers/login/Login.jsx";
import Profile from "./containers/profilePg/Profile.jsx";
import Account from "./containers/account/Account.jsx";
import Editor from "./containers/editor/Editor.jsx";



function App() {
  console.log("yo");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
