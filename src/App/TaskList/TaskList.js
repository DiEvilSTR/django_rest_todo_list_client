import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import { useQuery } from 'react-query';

import { fetchTaskList } from './fetchTaskList';

export function TaskList() {
  const { isLoading, isError, data, error } = useQuery('TaskList', fetchTaskList);

  if (!data || isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" size="lg" variant="light" />
      </div>
    );
  }

  const { item_list: taskList, total_count: totalCount } = data.data;

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Title</th>
          <th>Updated at</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {taskList.map(task => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.updated_at}</td>
            <td>
              {task.is_done ? null : (
                <Button size="sm" variant="outline-success">
                  Mark as done
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
