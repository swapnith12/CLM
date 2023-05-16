import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'ContractName',
    headerName: 'Contract Name',
    width: 150,
    editable: true,
  },
  {
    field: 'CreatedOn',
    headerName: 'Creation on',
    type:'text',
    width: 150,
    editable: true,
  },
  {
    field: 'ExpiryOn',
    headerName: 'Expiry on ',
    type: 'text',
    width: 110,
    editable: true,
  },
  {
    field: 'Status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, CreatedOn: "23/07/2015", ContractName: 'Jon', ExpiryOn: "23/07/2025" },
  { id: 2, CreatedOn: "23/07/2015", ContractName: 'Cersei', ExpiryOn:  "23/07/2025" },
  { id: 3, CreatedOn: "23/07/2015", ContractName: 'Jaime', ExpiryOn:  "23/07/2025"},
  { id: 4, CreatedOn: "23/07/2015", ContractName: 'Arya', ExpiryOn:  "23/07/2025" },
  { id: 5, CreatedOn: "23/07/2015", ContractName: 'Daenerys', ExpiryOn: null },
  { id: 6, CreatedOn: "23/07/2015", ContractName: null, ExpiryOn:  "23/07/2025" },
  { id: 7, CreatedOn: "23/07/2015", ContractName: 'Ferrara', ExpiryOn: "23/07/2025" },
  { id: 8, CreatedOn: "23/07/2015", ContractName: 'Rossini', ExpiryOn:  "23/07/2025" },
  { id: 9, CreatedOn: "23/07/2015", ContractName: 'Harvey', ExpiryOn:  "23/07/2025"},
];

export default function TaskList() {
  return (
    <div style={{ height: 250, width: '1000px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pExpiryOnSize={5}
        rowsPerPExpiryOnOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
