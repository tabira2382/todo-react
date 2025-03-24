import { useState } from 'react';
import './styles.css';
import { InputTodo } from './components/inputTodo';

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }
  return(
    <>
      <InputTodo 
        todoText={todoText} 
        onChange={onChangeTodoText} 
        onClick={onClickAdd} 
      />
      
      <div className="complete-area" >
      <ul>
        <p className="title">完了のTODO</p>
          {completeTodos.map((todo,index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick= {() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
  