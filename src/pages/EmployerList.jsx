import React,{useEffect,useState} from 'react'
import { Table } from "semantic-ui-react";
import EmployerService from '../services/EmployerService';

export default function EmployerList() {
    const [employers, setemployers] = useState([]);
    useEffect(() => {
        let employerService=new EmployerService();
        employerService.getAll().then(response=>setemployers(response.data.data));
    }, [])

    return (
        <div>
        <Table celled fixed >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
              <Table.HeaderCell>Web Adres</Table.HeaderCell>
        
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {employers.map((empployer) => (
              <Table.Row key={empployer.id}>
                <Table.Cell>{empployer.email}</Table.Cell>
                <Table.Cell>{empployer.companyName}</Table.Cell>
                <Table.Cell>{empployer.webSiteAdress}</Table.Cell>
                
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    )
}
