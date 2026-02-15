import axios from "axios";

const API = "http://localhost:3001/users";

export const getUsers = () => axios.get(API);
export const createUser = (data: any) =>  axios.post(API, data)
export const updateUser = (id: number, data: any) =>
  axios.put(`${API}/${id}`, data);
export const deleteUser = (id: number) =>
  axios.delete(`${API}/${id}`);