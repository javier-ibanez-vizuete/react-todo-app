import { ResetApp } from "../ResetApp/ResetApp";
import { ResetFavorites } from "../ResetFavorites/ResetFavorites";
import { TodoItem } from "../TodoItem/TodoItem";
import "./Favorites.css";

export const Favorites = ({ todos, onToggleTodo, onDeleteTodo, onToggleFavorite, onResetApp, onResetFavorites }) => {
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

			{favorites?.length > 0 && <ResetApp onResetApp={onResetApp} />}
			{favorites?.length > 0 && <ResetFavorites onResetFavorites={onResetFavorites} />}
		</div>
	);
};
