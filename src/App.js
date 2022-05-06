import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation";
import AdventureDetails from "./components/AdventureDetails";
import Adventures from "./components/Adventures";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/adventures/:id" element={<Adventures />} />
        <Route path="/adventuredetails/:id" element={<AdventureDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
