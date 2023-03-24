import "./Form.css";
import { useState, React } from "react";

function Modal({ setShow, editId, editItem }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
    console.log(query);
    editItem(editId, query);
  };
  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="input"
          type="text"
          required
          autoFocus
        />
        <button className="btn">Submit</button>
      </form>
      <button
        className="btn"
        onClick={() => {
          setShow(false);
        }}
      >
        Close
      </button>
    </div>
  );
}
export default Modal;
