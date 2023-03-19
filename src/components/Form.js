import { useState } from "react";
import "./Form.css";

function Form({ setData }) {
  const [todo, setTodo] = useState("");
  // console.log(todo);
  const handleSubmit = (e) => {
    e.preventDefault();
    let item = {
      id: Date.now(),
      text: todo,
      selected: false,
    };
    setData((prev) => {
      return [...prev, item];
    });
    setTodo("");
  };
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
          setTodo(e.target.value.trim());
        }}
        value={todo}
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
