import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/auth/Login.jsx";
import { Register } from "./Components/auth/Register.jsx";
import { Dashboard } from "./Components/Dashboard.jsx";
import { Navbar } from "./Components/Navbar.jsx";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
