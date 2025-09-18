

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Marketing from "./pages/Marketing";
import Finance from "./pages/Finance";
import Procurement from "./pages/Procurement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/procurement" element={<Procurement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
