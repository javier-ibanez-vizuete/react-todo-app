import { TodoItem } from "../TodoItem/TodoItem";
import "./TodoList.css";

export const TodoList = ({ todos, onToggleTodo, onDeleteTodo, onToggleFavorite }) => {
	console.log(todos);

	return (
		<div className="todo-list-container">
			<h2 className="todo-list-title">⚡ Todas las tareas</h2>

			{!todos?.length && <p className="todo-list-empty">No hay tareas que mostrar</p>}

			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onToggleTodo={onToggleTodo}
					onDeleteTodo={onDeleteTodo}
					onToggleFavorite={onToggleFavorite}
				/>
			))}
		</div>
	);
};
