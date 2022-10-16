import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/auth/Login.jsx";
import { Register } from "./Components/auth/Register.jsx";
import { Dashboard } from "./Components/Dashboard.jsx";
import { Navbar } from "./Components/Navbar.jsx";
import "./App.css";
import { TaskForm } from "./Components/Form.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<TaskForm />} />
      </Routes>
    </div>
  );
}

export default App;
