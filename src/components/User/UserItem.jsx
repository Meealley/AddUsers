import React from "react";

const UserItem = (props) => {
  const deleteItem = () => {
    props.onDelete(props.id);
  };
  return <li onClick={deleteItem}>{props.children}</li>;
};

export default UserItem;
