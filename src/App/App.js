import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PageContent } from './PageContent';
import { PageHeader } from './PageHeader';
import { Task } from './Task';
import { TaskList } from './TaskList';

const queryClient = new QueryClient();

export function App() {
  return (
    <div className="d-flex flex-column flex-grow-1">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <PageHeader />

          <PageContent>
            <Routes>
              <Route element={<TaskList />} path="/" />
              <Route element={<Task />} path="/:taskId" />
            </Routes>
          </PageContent>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
