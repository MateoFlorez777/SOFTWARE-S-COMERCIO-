import axios from 'axios';

export const API_URL ="http://localhost:5454";

// change api

export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});