import React from "react";
import Sidebar from "./SidebarAdmin";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
export default function Admin() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={12}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
