// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:9010'; // Replace with your Go API URL

export const getBooks = () => {
  return axios.get(`${API_BASE_URL}/books`);
};

export const getBook = (id) => {
  return axios.get(`${API_BASE_URL}/books/${id}`);
};

export const createBook = (book) => {
  return axios.post(`${API_BASE_URL}/books`, book);
};

export const updateBook = (id, book) => {
  return axios.put(`${API_BASE_URL}/books/${id}`, book);
};

export const deleteBook = (id) => {
  return axios.delete(`${API_BASE_URL}/books/${id}`);
};
