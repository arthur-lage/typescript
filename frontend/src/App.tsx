import React, { useState, useEffect } from "react";
import User from "./components/User";

import api from "./services/api";

function App() {
  interface IUser {
    name: string;
    email: string;
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [users, setUsers] = useState<IUser[]>([]);

  // @ts-ignore
  const handleForm = (e) => {
    e.preventDefault();

    api.post("/users", { name: name, email: email }).then((res) => {
      window.location.href = "";
    });
  };

  useEffect(() => {
    api.get<IUser[]>("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="users-wrapper">
        <h2>Users</h2>
        {users ? (
          <div className="users">
            {users.map((user) => (
              <User user={user} key={user.email} />
            ))}
          </div>
        ) : (
          <h3>No users registered yet</h3>
        )}
      </div>
      <div className="register">
        <h2>Register</h2>
        <form onSubmit={handleForm}>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              required
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              required
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;
