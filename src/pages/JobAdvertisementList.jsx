import React, { useState, useEffect } from "react";
import { Table, Item } from "semantic-ui-react";
import JobAdvertismentService from "../services/JobAdvertismentService";
import "../assets/css/jobadvertisiement.css"

export default function JobAdvertisementList() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertismentService();
    jobAdvertisementService
      .getJobAdvertisement()
      .then((response) => setjobAdvertisements(response.data.data));
  }, []);

  return (
    <div className="bg-card">
      <div >
        <Item.Group divided>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Item key={jobAdvertisement.id}>
              <Item.Image
                size="small"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjPcCvhIcUpVMqNdX31gJU90TGEO2YZBxWPuvuiSMIwJaJ8LyHJqwL7wW32hX_2_H9kCU&usqp=CAU"
              />

              <Item.Content>
                <Item.Header style={{ textAlign: "left" }}>
                  {jobAdvertisement.jobPosition.name}
                </Item.Header>
                <Item.Description style={{ textAlign: "left" }}>
                  <p style={{ textAlign: "left" }}>
                    {jobAdvertisement.employer.companyName}
                  </p>
                  <p>{jobAdvertisement.city.name}</p>
                  <p>{jobAdvertisement.endDate}</p>
                  <p>{jobAdvertisement.description}</p>
                </Item.Description>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </div>
    </div>
  );
}
