import api from './apiConfig';

export const renderAllFavorites = async () => {
  const resp = await api.get('/favorites')
  return resp.data
}

export const renderOneFavorite = async (id) => {
  const resp = await api.get(`/favorites/${id}`);
  return resp.data
}

export const createFavorite = async (data) => {
  const resp = await api.post('/favorites', { favorite: data })
  return resp.data
}

export const updateFavorite = async (id, data) => {
  const resp = await api.put(`/favorites/${id}`, { favorite: data })
  return resp.data
}

export const destroyFavorite = async (id) => {
  const resp = await api.delete(`/favorites/${id}`)
  return resp.data
}