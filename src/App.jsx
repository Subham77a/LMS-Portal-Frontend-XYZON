import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import Login from "./assets/login";
import Dashboard from "./assets/Dashboard";
import Createac from "./assets/Createac"


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/createac" element={<Createac />}></Route>
      </Routes>
  );
}

export default App;
