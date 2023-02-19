import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ItemsDetails } from "./pages/ItemDetails";
import { LandingPage } from "./pages/LandingPage";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

export function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/items/:itemId" element={<ItemsDetails />} />
          <Route path="/movies" element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
}
