import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/NOMBRE' });

// CREATE
export const createBook = async (obj) => await instance.post('/', obj);

// READ
export const getBooks = async () => await instance.get('/');

// DELETE
export const deleteBook = async (id) => await instance.delete('/' + id)
