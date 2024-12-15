import ToDoItem1 from "./ToDoItem1";

function ToDoItem({ todoItem, handleDeleteButton }) {
  return (
    <>
      {todoItem.map((item) => {
        return (
          <ToDoItem1
            key={item.id}
            todoDate={item.dueDate}
            todoName={item.name}
            handleDeleteButton={handleDeleteButton}
          ></ToDoItem1>
        );
      })}
    </>
  );
}
export default ToDoItem;
