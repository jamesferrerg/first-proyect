import { ItemsGrid } from "./components/ItemsGrid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ItemsDetails } from "./pages/ItemDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1>Movies</h1>
        </Link>
      </header>
      <main>
        <Switch>
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
