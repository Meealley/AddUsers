import React, { useState } from "react";
import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errors, setErrors] = useState();

  const userChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredUser(event.target.value);
  };
  const ageChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredAge(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);
      setErrors({
        title: "Please Enter a valid input",
        message: "Either Cannot be blank",
      });
      return;
    }
    if (+enteredAge < 1) {
      setErrors({
        title: "Invalid Age",
        message: "Please enter a valid age",
      });
      return;
    }
    props.onAddUser(enteredUser, enteredAge);
    console.log(enteredUser, enteredAge);
  };
  const errorHandler = () => {
    setErrors(null);
  };

  return (
    <>
      {errors && <ErrorModal title={errors.title} message={errors.message} onCancel={errorHandler}/>}
      {!errors && (
        <Card className="input">
          <form onSubmit={submitFormHandler}>
            <label
              htmlFor="Username"
              style={{ color: !isValid ? "red" : " " }}
            >
              Username
            </label>
            <input
              style={{ borderColor: !isValid ? "red" : " " }}
              type="text"
              value={enteredUser}
              onChange={userChangeHandler}
            />
            <label
              htmlFor="Age(Years)"
              style={{ color: !isValid ? "red" : "black" }}
            >
              Age
            </label>
            <input
              style={{ borderColor: !isValid ? "red" : "black" }}
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
              step="1"
            />
            <Button type="submit">Add user</Button>
          </form>
        </Card>
      )}
    </>
  );
};

export default AddUser;
