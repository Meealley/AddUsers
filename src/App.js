import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const userHandler = (uName, uAge) => {
    setUsers((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={userHandler} />
      <UserList listUser={users} />
    </div>
  );
};

export default App;
