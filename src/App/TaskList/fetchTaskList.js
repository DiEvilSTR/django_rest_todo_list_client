import { BACKEND_API_ENDPOINT } from '/src/common';

export async function fetchTaskList() {
  const response = await fetch(`${BACKEND_API_ENDPOINT}/task/list`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}
