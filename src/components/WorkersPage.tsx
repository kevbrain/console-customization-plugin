import * as React from "react";
import { useState } from 'react';

import {Worker} from "../app/models";
import {WorkersTable }from "../app/Components/Tables";
import { Button } from '@patternfly/react-core';

export const WorkersPage = () => {
  const [workers, setWorkers] = useState<Worker[]>([]);
  async function fetchWorkersHandler() {
    const response = await fetch('capacity-tool-service.capacity-tool-dev.svc.cluster.local:8080/api/v1/nodes');
    console.log('in workerPage after fetch nodes ' + response + ' where response status is ' + response.status);
    const workersData = await response.json();
    setWorkers(workersData);
    console.log('Fecth success ');
  }
 
  let content = <React.Fragment />;
  if (workers.length > 0) {
    content = <WorkersTable workers={workers} />;
  }
  return (
    <React.Fragment>
      <Button variant = "secondary" onClick={fetchWorkersHandler}>Fetch Workers</Button>
      {content}
    </React.Fragment>
  );
};


export default WorkersPage;