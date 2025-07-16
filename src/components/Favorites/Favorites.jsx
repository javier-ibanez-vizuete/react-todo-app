import { TodoItem } from "../TodoItem/TodoItem";
import "./Favorites.css";

export const Favorites = ({ todos, onToggleTodo, onDeleteTodo, onToggleFavorite }) => {
	const favorites = todos.filter((todo) => todo.favorite);

	return (
		<div className="favorites-container">
			<h2 className="favorites-title">⭐Favoritos</h2>

			{!favorites?.length && <p className="todo-list-empty">No hay favoritos que mostrar</p>}

			{favorites.map((todo) => (
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
