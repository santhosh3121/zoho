import React from 'react';
import './book.css';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


function Book()
{
    const row = [
      { id: 1, bookname: 'Snow love and the thunder and the opop', gstin: 'Jon', age: 35 },
      { id: 2, bookname: 'Lannister', gstin: 'Cersei', age: 42 },
      { id: 3, bookname: 'Lannister', gstin: 'Jaime', age: 45 },
      { id: 4, bookname: 'Stark', gstin: 'Arya', age: 16 },
      { id: 5, bookname: 'Targaryen', gstin: 'Daenerys', age: null },
      { id: 6, bookname: 'Melisandre', gstin: null, age: 150 },
      { id: 7, bookname: 'Clifford', gstin: 'Ferrara', age: 44 },
      { id: 8, bookname: 'Frances', gstin: 'Rossini', age: 36 },
      { id: 9, bookname: 'Roxie', gstin: 'Harvey', age: 65 },
      { id: 10, bookname: 'Roxie', gstin: 'Harvey', age: 65 },
      { id: 11, bookname: 'Roxie', gstin: 'Harvey', age: 65 },
      { id: 12, bookname: 'Roxie', gstin: 'Harvey', age: 65 },
      { id: 13, bookname: 'Roxie', gstin: 'Harvey', age: 65 },
      { id: 14, bookname: 'Roxie', gstin: 'Harvey', age: 65 },
      { id: 15, bookname: 'Roxie', gstin: 'Harvey', age: 65 }
    ];
    const[data,setData]=useState(row)

    const handledelete = (id) =>
    {
      setData(data.filter((item)=> item.id !== id));
    }
    
    
    const columns =[
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'bookname', headerName: 'Book name', width: 300 },
      { field: 'gstin', headerName: 'GSTIN', width: 130 },
      {
        field: 'quantity',
        headerName: 'Quantity',
        type: 'number',
        width: 130,
      },
      {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160
      },
      {
        field:'actions',
        headerName:'Actions',
        width:130,
        renderCell:(params)=>{
          return(
            <>
            <DeleteIcon className="deleteicon" onClick={()=>handledelete(params.row.id)}/>
            </>
          );
        }
      }
    ];
    
    return(

        <div className="books">
           <DataGrid
            rows={data}
            editMode="row"
            disableSelectionOnClick
            icon={<ManageAccountsIcon />}       
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]} 
      />
        </div>
    );
}

export default Book;