import "./TodoList.css";

export const TodoList = ({ todos }) => {
	console.log(todos);

	return (
		<div className="todo-list-container">
			<h2 className="todo-list-title">⚡ Todas las tareas</h2>

			{!todos?.length && <p className="todo-list-empty">No hay tareas que mostrar</p>}

			{todos.map((todo) => (
				<div className="todo" key={todo.id}>
					{todo.text}
				</div>
			))}
		</div>
	);
};
