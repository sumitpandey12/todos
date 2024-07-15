import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Button/Card";
import "./AddUser.css";

const AddUser = () => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.split() == null || age == null || age < 1) {
      return;
    }
    console.log(username, age);
    setUserName("");
    setAge("");
  };

  const handleUserName = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  const handleAge = (event) => {
    event.preventDefault();
    setAge(event.target.value);
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={handleUserName}
          value={username}
        />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={handleAge} value={age} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
