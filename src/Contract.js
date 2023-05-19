
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}



function Contract() {
  return( <> <Box className='container position-relative m-5'>
    <div>
    <h1 className="display-2"><b><i className="bi bi-briefcase-fill">Contracts</i></b></h1><br/><br/><br/>

    <table className="table">
     <thead>
         <tr>
          <th scope="col">#</th>
          <th scope="col">Contract ID</th>
          <th scope="col">Contract Name</th>
          <th scope="col">Initiation Date</th>
          <th scope="col">Expiring Date</th>
          <th scope="col">Status</th>
         </tr>
     </thead>
        <tbody>
             <tr>
               <th scope="row">1</th>
               <td>C-321</td>
               <td>MSA</td>
               <td>1Janauary2023</td>
               <td>1Janauary2025</td>
               <td>live</td>
             </tr>
             <tr>
               <th scope="row">2</th>
               <td>C-422</td>
               <td>Employee</td>
               <td>1June2023</td>
               <td>1June2025</td>
               <td>Yet to be Approved</td>
             </tr>
             <tr>
               <th scope="row">3</th>
               <td>V-543</td>
               <td>MSA</td>
               <td>1Janauary2021</td>
               <td>1June2023</td>
               <td>About to Expire</td>
             </tr>
        </tbody>
    </table><br/><br/>
    </div>
  </Box>
    </>
  )
  
  }

export default Contract