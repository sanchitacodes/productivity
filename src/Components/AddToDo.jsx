import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [todoName, settododName] = useState([]);
  const [todoDate, settodoDate] = useState([]);

  const handleNameChange = (event) => {
    settododName(event.target.value);
  };
  const handleDateChange = (event) => {
    settodoDate(event.target.value);
  };

  const handleAddButton = () => {
    onNewItem(todoName, todoDate);
    settododName("");
    settodoDate("");
  };
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">
          <input
            type="text"
            placeholder="Enter your todo here"
            value={todoName}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col">
          <input
            type="date"
            value={todoDate}
            onChange={handleDateChange}
          ></input>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
