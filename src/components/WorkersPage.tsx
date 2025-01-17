import * as React from "react";
import { useState } from 'react';

import {Worker} from "../app/models";
import {WorkersTable }from "../app/Components/Tables";
import { Button } from '@patternfly/react-core';

export const WorkersPage = () => {
  const [workers, setWorkers] = useState<Worker[]>([]);
  async function fetchWorkersHandler() {
    const response = await fetch('https://capacity-tool-route-capacity-tool-dev.apps.ocp-lab2.its4u.eu/api/v1/nodes');
    console.log('in workerPage after fetch nodes ' + response + ' where response status is ' + response.status);
    const workersData = await response.json();
    setWorkers(workersData);
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