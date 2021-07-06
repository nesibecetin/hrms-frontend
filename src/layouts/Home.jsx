import React from "react";
import { Grid,Container } from "semantic-ui-react";
import Sidebar from "./Sidebar";
import { Route } from "react-router-dom";
import CandidateList from "../pages/CandidateList";
import JobAdvertisementList from "../pages/JobAdvertisement/ListJobAdvertisement";
import EmployerList from "../pages/EmployerList";
import { routes } from "../routes";
import Navi from "../layouts/Navi"
export default function Dashboard() {
  const{home,candidates,employers}=routes;
  return (
    <div>
        <Navi />
      <Container className="main">
      
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Sidebar/>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path={home.path} component={JobAdvertisementList} />
            <Route path={candidates.path} component={CandidateList} />
            <Route path={employers.path} component={EmployerList} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>
      
    </div>
  );
}
