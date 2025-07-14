import axios from 'axios';

const API_BASE = 'http://localhost:5001';

export const getUsers = () => axios.get(`${API_BASE}/users`);
export const claimPoints = (userId) => axios.post(`${API_BASE}/claim/${userId}`);
export const addUser = (name) => axios.post(`${API_BASE}/users`, { name });
