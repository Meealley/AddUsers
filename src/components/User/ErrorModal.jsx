import React from "react";
import "./ErrorModal.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ErrorModal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onCancel} />
      <Card className="modal">
        <div className="header">
          <h2>{props.title}</h2>
        </div>
        <div className="content">{props.message}</div>
        <div className="actions">
          <Button onClick={props.onCancel}>close</Button>
        </div>
      </Card>
    </>
  );
};



export default ErrorModal;
