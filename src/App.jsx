import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import Login from "./assets/login";


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
