// src/api.js
import axios from 'axios';

const API_BASE_URL = 'https://podcast-api.netlify.app';

export const fetchPreviews = () => axios.get(`${API_BASE_URL}`);
export const fetchShow = (id) => axios.get(`${API_BASE_URL}/id/${id}`);
export const fetchGenre = (id) => axios.get(`${API_BASE_URL}/genre/${id}`);
