import { Route, Routes as ReactRouts } from 'react-router-dom';

import { Auth, TaskList } from './containers';

export function Routes() {
  return (
    <Auth>
      <ReactRouts>
        <Route element={<TaskList />} path="/" />
        {/* <Route element={<Task />} path="/:taskId" /> */}
        {/* <Route element={<NotFoundPage />} path="*" /> */}
      </ReactRouts>
    </Auth>
  );
}
