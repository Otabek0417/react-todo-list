import Modal from "./components/Modal";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const updateData = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setData(newData);
  };

  const deleteItem = (id) => {
    const newData = data.filter((item) => {
      return item.id !== id;
    });
    setData(newData);
  };

  // edit function

  const editItem = (id, editText) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, text: editText };
      }
      return item;
    });
    setData(newData);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Daily To Do List</h1>

        <Form getData={setData} />

        <TodoList
          data={data}
          updateData={updateData}
          deleteItem={deleteItem}
          editItem={editItem}
        />
        <hr />
        <footer>
          <p>Items: {data.length}</p>

          <button
            onClick={() => {
              setData([]);
            }}
          >
            Clear all
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;
