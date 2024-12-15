import styles from "./ToDoItem1.module.css";
function ToDoItem1({ todoName, todoDate, handleDeleteButton }) {
  return (
    <div className={`${styles["kg-container"]} container text-center`}>
      <div className="row align-items-start">
        <div className="col">{todoName}</div>
        <div className="col">{todoDate}</div>
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDeleteButton(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem1;
