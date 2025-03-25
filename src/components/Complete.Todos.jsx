export const CompleteTodos = (props) => {
  const {todos, onClickBack} = props;
  return(
    <div className="complete-area" >
      <ul>
        <p className="title">完了のTODO</p>
          {todos.map((todo,index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick= {() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
};