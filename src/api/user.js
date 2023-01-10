import client from './client';

export async function getUser(userName) {
  const response = await client.get(`/api/users/${userName}`);

  return response.data;
}

export async function getStatusTasks(userName, statusName) {
  const statusList = await getUser(userName).then((res) => res.status);

  for (const [key, val] of Object.entries(statusList)) {
    if (key === statusName) return val;
  }

  return 0;
}

export async function getTaskCount(userName) {
  const taskCount = await getUser(userName).then((res) => res.taskCount);

  return taskCount;
}

export async function createUser(userName) {
  const response = await client.post('/api', { userName });
  response.status === (201 || 409) && localStorage.setItem('loginedUser', JSON.stringify(userName));

  return response.data;
}

export async function patchStatus(loginedUser, statusName) {
  const response = await client.patch('/api', { loginedUser, statusName });
  return response.data;
}

export async function putTask(data) {
  const response = await client.put('/api', data);
  return response.data;
}
