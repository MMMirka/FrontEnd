import React, {useState, useEffect} from 'react';
import { AgGridReact } from 'ag-grid-react';
import moment from 'moment';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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

  const deleteTraining = (url) => {
    if (window.confirm('Are you sure?')){
        fetch(url, {
            method: 'DELETE'})
        .then (response => {
            if(response.ok)
            fetchTrainings();
            else 
                alert('Something went wrong'); 
        })
        .then (_ => fetchTrainings())
        .catch(err => console.log(err))
        }
} 
  
  const columns =[
    {field: 'date', cellRenderer: (row) => 
    { return moment(row.value).format('LLL');}, sortable: true, filter: true},
    {field: 'duration', sortable: true, filter: true},
    {field: 'activity', sortable: true, filter: true},
    {headerName: 'Customer', field: 'customer.firstname', sortable: true, filter: true},
    {headerName: '', field: 'customer.lastname', sortable: true, filter: true},

    {headerName: '', field: 'links',
    cellRendererFramework: params => 
    <IconButton onClick={()=> deleteTraining('https://customerrest.herokuapp.com/api/trainings/' + params.data.id)}>
        <DeleteIcon/>
    </IconButton>   
}
]



return (
  <div className="ag-theme-material" style={{ height: 600, width: '90%', margin:'auto' }}>
      <AgGridReact
          rowData={training}
          columnDefs={columns}
          pagination={true}
          paginationPageSize={10}
      />
  </div>
);
}

export default Traininglist;
