import React, {useState, useEffect} from 'react';
import { AgGridReact } from 'ag-grid-react';
import moment from 'moment';
import { format } from "date-fns";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Traininglist() {

    
  const [training, setTraining] = useState([]);

  useEffect(() => {
    fetchTrainings();

  },[]);

  const fetchTrainings = () => {
    fetch('https://customerrest.herokuapp.com/gettrainings')
    .then(response => response.json())
    .then(data => setTraining(data))
    .catch(err => console.err(err))
  }
  
  const columns =[
    {field: 'date', cellRenderer: (data) => 
    { return moment(data.value).format('LLL');}, sortable: true, filter: true},
    {field: 'duration', sortable: true, filter: true},
    {field: 'activity', sortable: true, filter: true},
    {headerName: 'Customer', field: 'customer.firstname', sortable: true, filter: true},
    {headerName: '', field: 'customer.lastname', sortable: true, filter: true},
]



return (
  <div className="ag-theme-material" style={{ height: 600, width: '90%', margin:'auto' }}>
      <AgGridReact
          rowData={training}
          columnDefs={columns}
          pagination={true}
          paginationPageSize={10}
      />
 <div>

 </div>
  </div>
);
}

export default Traininglist;
