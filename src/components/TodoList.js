import TodoItems from "./TodoItems";
import { useSelector } from "react-redux";

const TodoList = () => {
    
  const todoItems = useSelector(state => state.task.todoItems) 
  console.log(todoItems)

    return (
        <ul>
            {todoItems.map((todoItem) => <TodoItems key={todoItem.id} id={todoItem.id} title={todoItem.title} />)}
        </ul>
    )
}

export default TodoList;