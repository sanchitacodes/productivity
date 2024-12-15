import AddToDo from "./Components/AddToDo";
import AppName from "./Components/AppName";
import "./App.css";
import { useState } from "react";
import ToDoItem from "./Components/ToDoItem";
import WelcomeMsg from "./Components/WelcomeMsg";
function App() {
  const [todoItems, settododItems] = useState([]);
  const onNewItem = (newName, newDate) => {
    const newItems = [...todoItems, { name: newName, dueDate: newDate }];
    settododItems(newItems);
  };
  const handleDeleteButton = (itemName) => {
    const newItems = todoItems.filter((item) => item.name !== itemName);
    settododItems(newItems);
  };
  return (
    <center>
      <AppName></AppName>
      <AddToDo className="kg-todo" onNewItem={onNewItem}></AddToDo>
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <ToDoItem
        todoItem={todoItems} 
        handleDeleteButton={handleDeleteButton}
      ></ToDoItem>
    </center>
  );
}
export default App;
