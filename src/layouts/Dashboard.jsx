import React from "react";
import { Grid } from "semantic-ui-react";
import Sidebar from "./Sidebar";
import { Route } from "react-router-dom";
import CandidateList from "../pages/CandidateList";
import JobAdvertisementList from "../pages/JobAdvertisementList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={JobAdvertisementList} />
            <Route path="/candidates" component={CandidateList} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
