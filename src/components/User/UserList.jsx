import React from "react";
import Card from "../UI/Card";
import "./UserList.css";
// import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className="users">
      <ul className="users">
        {props.listUser.map((user) => (
          <li key={user.id} id={user.id}>
            {user.name} {user.age}(years)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
