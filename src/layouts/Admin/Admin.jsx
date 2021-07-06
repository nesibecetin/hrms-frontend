import React from "react";
import Sidebar from "./SidebarAdmin";
import { Route } from "react-router-dom";
import { Grid ,Container} from "semantic-ui-react";
import Navi from "../Navi";
import JobPositionAdd from "../../pages/JobPosition/AddJobPosition";
import { routes } from "../../routes";
export default function Admin() {
  const{jobPositionAdd}=routes
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={13}>
            <Navi />
            <Container>
              <Route path={jobPositionAdd.path} component={JobPositionAdd} ></Route>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
