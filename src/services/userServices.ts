import { api } from "./apiClient";
import type { User } from "../types/user";

export const getUsers = () => api.get<User[]>("/users");

export const createUser = (data: User) =>
  api.post("/users", data);

export const updateUser = (id: number, data: User) =>
  api.put(`/users/${id}`, data);

export const deleteUser = (id: number) =>
  api.delete(`/users/${id}`);