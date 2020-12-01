import api from './api-config';

export const renderAllUsers = async () => {
  const resp = await api.get('/users')
  return resp.data
}

export const readOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data
}

export const createUser = async (data) => {
  const resp = await api.post('/users', { user: data })
  return resp.data
}

export const updateUser = async (id, data) => {
  const resp = await api.put(`/users/${id}`, { user: data })
  return resp.data
}

export const destroyUser = async (id) => {
  const resp = await api.delete(`/users/${id}`)
  return resp.data
}