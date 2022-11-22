import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const userHandler = (uName, uAge) => {
    setUsers((prevList) => {
      const updatedeUser = [...prevList];
      updatedeUser.unshift({
        name: uName,
        age: uAge,
        id: Math.random().toString(),
      });
      return updatedeUser;
    });
  };
  const deletHandler = (userId) => {
    setUsers((prevList) => {
      const updatedUser = prevList.filter((user) => user.id !== userId);
      return updatedUser;
    });
  };

  return (
    <div>
      <AddUser onAddUser={userHandler} />
      <UserList listUser={users} onDeleteItem={deletHandler} />
    </div>
  );
};

export default App;
