import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { Button, Card, Image } from "semantic-ui-react";
import { Grid, Segment } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import CandidateService from "../services/CandidateService";

export default function CandidateList() {
  const [candidates, setcandidates] = useState([]);
  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidate()
      .then((response) => setcandidates(response.data.data));
  }, []);
  return (
    <div>
      <Grid>
        <Grid.Row columns={3} style={{height:450}}>
          {candidates.map((candidate) => (
            <Grid.Column>
              <Card.Group>
                <Card>
                  <Card.Content key={candidate.id}>
                    <Image
                      floated="right"
                      size="mini"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHg_t3WBJBy4SEC_9uU-gi71PNXXdInw5uRQ&usqp=CAU"
                    />
                    <Card.Header textAlign="left">
                      {candidate.firstName} {candidate.lastName}
                    </Card.Header>
                    <Card.Meta textAlign="left">
                      <span className="date">{candidate.email}</span>
                    </Card.Meta>
                    
                  </Card.Content>
                  <Card.Content extra>
                  <Card.Description >
                      Matthew is a musician living in Nashville.
                    </Card.Description>
                    
                  </Card.Content>
                  <Card.Content extra>
                  
                    <div className="ui two buttons">
                      <Button basic color="green">
                        Detay Görüntüle
                      </Button>
                      
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
