import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

function MainTable() {
  // TS: type State = 'ready' | 'edit';
  const [stateTable, setStateTable] = useState('ready');
  const handleTableReady = () => {
    setStateTable('ready');
  };
  const handleTableEdit = () => {
    setStateTable('edit');
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${
          params.getValue('lastName') || ''
        }`,
    },
  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const renderButtons = (state) => {
    switch (state) {
      case 'ready':
        return (
          <button onClick={handleTableEdit} type="button">
            Edit
          </button>
        );

      case 'edit':
        return (
          <button onClick={handleTableReady} type="button">
            Done
          </button>
        );

      default:
        throw new Error(`dont understand state ${state}`);
    }
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
      {renderButtons(stateTable)}
    </div>
  );
}

export default MainTable;
