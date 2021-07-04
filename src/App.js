import "./App.css";
import Navi from "./layouts/Navi";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Home from "./layouts/Home";
import Admin from "./layouts/Admin/Admin";
import CandidateList from "./pages/CandidateList";
import { Route, Switch } from "react-router-dom";
import {routes} from "./routes"

function App() {
const{ admin,home,candidates}=routes;

  return (
    <div className="App">
      <Navi />
      <Switch>
      <Route path={admin.path}>
          <Admin />
        </Route>
        <Route path={home.path}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
