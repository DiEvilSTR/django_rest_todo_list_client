import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useQuery } from 'react-query';

// import { PropTypes } from 'prop-types';
import { ALIGN, Flex, Page } from '/src/components';

import { fetchTaskList } from './fetchTaskList';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: params => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, title: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, title: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, title: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, title: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, title: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, title: 'Melisandre', firstName: null, age: 150 },
  { id: 7, title: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, title: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, title: 'Roxie', firstName: 'Harvey', age: 65 },
];

const DEFAULT_PAGE_SIZE = 25;
const PAGE_SIZE_LIST = [25, 50, 100];

export function TaskList() {
  const { isLoading, isError, data, error } = useQuery('TaskList', fetchTaskList);

  if (!data || isLoading) {
    return (
      <Page>
        <Flex vertical align={ALIGN.center}>
          <CircularProgress />
        </Flex>
      </Page>
    );
  }

  const { item_list: taskList, total_count: totalCount } = data.data;

  return (
    <Page>
      <DataGrid
        rows={taskList}
        rowCount={42}
        columns={columns}
        pageSize={DEFAULT_PAGE_SIZE}
        rowsPerPageOptions={PAGE_SIZE_LIST}
        checkboxSelection
        disableSelectionOnClick
      />
    </Page>
  );

  // if (!data || isLoading) {
  //   return (
  //     <div className="d-flex justify-content-center">
  //       <Spinner animation="border" size="lg" variant="light" />
  //     </div>
  //   );
  // }

  // const { item_list: taskList, total_count: totalCount } = data.data;

  // return (
  //   <Table striped bordered hover variant="dark">
  //     <thead>
  //       <tr>
  //         <th>Title</th>
  //         <th>Updated at</th>
  //         <th>Action</th>
  //       </tr>
  //     </thead>

  //     <tbody>
  //       {taskList.map(task => (
  //         <tr key={task.id}>
  //           <td>{task.title}</td>
  //           <td>{task.updated_at}</td>
  //           <td>
  //             {task.is_done ? null : (
  //               <Button size="sm" variant="outline-success">
  //                 Mark as done
  //               </Button>
  //             )}
  //           </td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </Table>
  // );
}
TaskList.propTypes = {};
