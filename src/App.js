import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Home from "./layouts/Home";
import Admin from "./layouts/Admin/Admin";
import { Route, Switch } from "react-router-dom";
import {routes} from "./routes"

function App() {
const{ admin,home}=routes;

  return (
    <div className="App">
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
