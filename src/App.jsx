import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import Login from "./assets/Login";
import Dashboard from "./assets/Dashboard";
import Createac from "./assets/Createac"
import Course from "./assets/Course";
import MyCourse from "./assets/MyCourse";
import HomeLayout from "./assets/HomeLayout";

function App() {
  return (
    
      <Routes>
       <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createac" element={<Createac />} />
      </Route>

      
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/course" element={<Course />} />
      <Route path="/mycourse" element={<MyCourse />} />

    </Routes>
  );
}

export default App;
