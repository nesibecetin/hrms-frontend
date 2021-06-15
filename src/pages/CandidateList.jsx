import React ,{useEffect,useState} from 'react'
import { Table } from "semantic-ui-react";
import CandidateService from '../services/CandidateService';

export default function CandidateList() {
    const [candidates, setcandidates] = useState([])
    useEffect(() => {
        let candidateService = new CandidateService();
        candidateService.getCandidate().then(response=>setcandidates(response.data.data));

    }, [])
    return (
        <div>
        <Table celled fixed >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Adı</Table.HeaderCell>
              <Table.HeaderCell>Soyadı</Table.HeaderCell>
              <Table.HeaderCell>Doğum Yılı</Table.HeaderCell>
              <Table.HeaderCell>Min Maaş</Table.HeaderCell>
        
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {candidates.map((candidate) => (
              <Table.Row key={candidate.id}>
                <Table.Cell>{candidate.email}</Table.Cell>
                <Table.Cell>{candidate.firstName}</Table.Cell>
                <Table.Cell>{candidate.lastName}</Table.Cell>
                <Table.Cell>{candidate.birthOfYear}</Table.Cell>
                
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    )
}
