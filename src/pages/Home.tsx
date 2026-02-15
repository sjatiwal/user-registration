import { useEffect, useState } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/userApi.ts";
import UserForm from "../components/UserForm.tsx";
import { Button } from "@mui/material";
import type { User } from "../types/user.ts";
import "./home.css";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);
  const [editingUser, setEditingUser] = useState<any>(null);

  const loadUsers = async () => {
    const res = await getUsers();
    console.log(res, "userData");
    setUsers(res.data);
    setEditingUser(null);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (data: any) => {
    if (editingUser) {
      await updateUser(editingUser.id, data);
      setEditingUser(null);
    } else {
      const res = await getUsers();
      const users = res.data;
      const emailExists = users.some(
        (u: User) => u.email.toLowerCase() === data.email.toLowerCase(),
      );
      const mobileExists = users.some((u: User) => u.phone === data.phone);

      if (mobileExists) {
        alert("Mobile number already registered");
        return;
      }

      if (emailExists) {
        alert("Email already registered");
        return;
      }

      await createUser(data);
    }
    loadUsers();
  };

  return (
    <div className="mainContaniner">
      <h2>User Registration</h2>

      <UserForm onSubmit={handleSubmit} defaultValues={editingUser} />

      <div className="listContainer">
        <h3>User List</h3>

        {users.length > 0 ? (
          users.map((u) => (
            <div key={u.id} className="listRow">
              <div className="nameContainer">
                {u.firstName} {u.lastName}
              </div>
              <div className="btn">
                <div>
                  <Button onClick={() => setEditingUser(u)}>Edit</Button>
                </div>
                <div>
                  <Button onClick={() => deleteUser(u.id).then(loadUsers)}>
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="noUser">No user Registered </div>
        )}
      </div>
    </div>
  );
}
