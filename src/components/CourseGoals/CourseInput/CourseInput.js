// Write your code at relevant places in the code below:

import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.length < 1) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    setEnteredValue("");
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="goalInput" style={{ color: isValid ? "black" : "red" }}>
          Course Goal
        </label>
        <input
          id="goalInput"
          type="text"
          onChange={goalInputChangeHandler}
          style={{
            backgroundColor: isValid ? "transparent" : "lightpink",
            borderColor: isValid ? "black" : "red",
          }}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
