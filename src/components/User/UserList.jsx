import React from "react";
import Card from "../UI/Card";
import "./UserList.css";
// import Card from "../UI/Card";
import UserItem from "./UserItem";

const UserList = (props) => {
  

  return (
    <Card className="users">
      <ul className="users">
        {props.listUser.map((user) => (
          <UserItem key={user.id} id={user.id} onDelete={props.onDeleteItem}>
            {user.name} {user.age}(years)
          </UserItem>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
