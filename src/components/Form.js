import { useState } from "react";
import "./Form.css";

function Form({ getData, setShow }) {
  const [todo, setTodo] = useState("");

  // Submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    let item = {
      id: Date.now(),
      text: todo,
      selected: false,
    };
    getData((prev) => {
      return [...prev, item];
    });
    setTodo("");
  };

  //Form
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Add new list item"
        required
        autoFocus
        autoComplete="off"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        value={todo}
      />
      <button onClick={() => {}} className="btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
