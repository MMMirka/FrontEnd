import React, {useState, useEffect} from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import AddCustomer from './AddCustomer'
import EditCustomer from './EditCustomer';
import AddTraining from './AddTraining';

function Customerlist() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
      fetchCustomers();
  
    },[]);



    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.log(err))
      }

      const addTraining = (newTraining) => {
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(newTraining)
        })
        .then (_ => fetchCustomers())
        .catch(err => console.log(err))
    }

    
    const addCustomer = (newCustomer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(newCustomer)
        })
        .then (_ => fetchCustomers())
        .catch(err => console.log(err))
    }

    const updateCustomer = (url, customer) => {
        fetch(url, {
            method: 'PUT',
            headers: {'Content-type' : 'application/json' },
            body: JSON.stringify(customer)
        })
        .then (_ => fetchCustomers())
        .catch(err => console.log(err))
    }

    const deleteCustomer = (url) => {
        if (window.confirm('Are you sure?')){
            fetch(url[0].href, {
                method: 'DELETE'})
            .then (response => {
                if(response.ok)
                    fetchCustomers();
                else 
                    alert('Something went wrong'); 
            })
            .then (_ => fetchCustomers())
            .catch(err => console.log(err))
            }
    }


    const columns = [
        {headerName: 'Firstname', field: 'firstname', sortable: true, filter: true},
        {headerName: 'Lastname', field: 'lastname', sortable: true, filter: true},
        {headerName: 'Street Address', field: 'streetaddress', sortable: true, filter: true},
        {headerName: 'Postcode', field: 'postcode', sortable: true, filter: true},
        {headerName: 'City', field: 'city', sortable: true, filter: true}, 
        {headerName: 'Email', field: 'email', sortable: true, filter: true},
        {headerName: 'Phone', field: 'phone', sortable: true, filter: true},
        { headerName: '', field: 'links', width: 90,
            cellRendererFramework: params => <EditCustomer updateCustomer={updateCustomer} params={params}/>
        },
        {headerName: '', field: 'links',
            cellRendererFramework: params => 
            <IconButton onClick={() => deleteCustomer(params.value)}><DeleteIcon/></IconButton>   
       },
       { headerName: '', field: 'links', width: 90,
       cellRendererFramework: params => <AddTraining addTraining={addTraining} params={params}/>
   },
    ]

    return(
        <div>
        <AddCustomer addCustomer={addCustomer}/>
        <div className="ag-theme-material" style={{ height: 600, width: '90%', margin:'auto' }}>
           <AgGridReact
               rowData={customers}
               columnDefs={columns}
               pagination={true}
               paginationPageSize={7}
               floatingFilter={true}
               suppressCellSelection={true}
           />
   
        </div>
       </div>
    );

}

export default Customerlist;