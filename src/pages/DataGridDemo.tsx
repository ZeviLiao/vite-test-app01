import { Box, Typography } from '@mui/material'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
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
    field: 'email',
    headerName: 'Email',
    width: 200,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (_value, row) =>
      `${row.firstName || ''} ${row.lastName || ''}`,
  },
]

const rows = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 35,
    email: 'jon@example.com',
  },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    email: 'cersei@example.com',
  },
  {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Jaime',
    age: 45,
    email: 'jaime@example.com',
  },
  {
    id: 4,
    lastName: 'Stark',
    firstName: 'Arya',
    age: 16,
    email: 'arya@example.com',
  },
  {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    age: null,
    email: 'daenerys@example.com',
  },
  {
    id: 6,
    lastName: 'Melisandre',
    firstName: null,
    age: 150,
    email: 'melisandre@example.com',
  },
  {
    id: 7,
    lastName: 'Clifford',
    firstName: 'Ferrara',
    age: 44,
    email: 'ferrara@example.com',
  },
  {
    id: 8,
    lastName: 'Frances',
    firstName: 'Rossini',
    age: 36,
    email: 'rossini@example.com',
  },
  {
    id: 9,
    lastName: 'Roxie',
    firstName: 'Harvey',
    age: 65,
    email: 'harvey@example.com',
  },
]

export default function DataGridDemo() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Data Grid (MUI X)
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        MUI X DataGrid - 强大的数据表格组件，支持排序、筛选、分页等功能
      </Typography>

      <Box sx={{ height: 400, width: '100%', mt: 3 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  )
}
