import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/items/:itemId">
            <ItemsDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
