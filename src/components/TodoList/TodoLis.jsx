
function TodoList (props) {
    return(
        <div>            
            <ul>
                {props.todo.map(listed => <div key = {Math.random()}>
                    <li>{listed}</li>
                    <button className = "buttonRemoved" onClick = {() => props.handleTodo(listed)}>Delete tarefa</button>
                </div>
                )}
            </ul> 
        </div> 
    )
}

export default TodoList;