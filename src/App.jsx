import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Tabs } from "./components/Navigation/Tabs";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { Favorites } from "./components/Favorites/Favorites";
import { storage } from "./helpers/storage";

const STORAGE_TODOS_KEY = "todos";

// const INITIAL_TODOS = [
// 	{
// 		text: "hacer la cama",
// 		completed: false,
// 		done: false,
// 		favorite: false,
// 		id: 1752598904698,
// 	},
// 	{
// 		text: "Cortar el cesped",
// 		completed: false,
// 		done: false,
// 		favorite: false,
// 		id: 1752598942394,
// 	},
// 	{
// 		text: "Programar React",
// 		completed: false,
// 		done: false,
// 		favorite: false,
// 		id: 1752598945746,
// 	},
// 	{
// 		text: "Hacer la todo App",
// 		completed: false,
// 		done: false,
// 		favorite: false,
// 		id: 1752598949402,
// 	},
// 	{
// 		text: "Programar 2 horas diarias",
// 		completed: false,
// 		done: false,
// 		favorite: false,
// 		id: 1752598954082,
// 	},
// 	{
// 		text: "hacer el proyecto de CV",
// 		completed: false,
// 		done: false,
// 		favorite: false,
// 		id: 1752598958882,
// 	},
// ];

const INITIAL_TODOS = storage.get(STORAGE_TODOS_KEY);

export const App = () => {
	const [activeTab, setActiveTab] = useState(Tabs.TODOS);
	const [todos, setTodos] = useState(INITIAL_TODOS || []);

	const addTodo = (newTodo) =>
		setTodos((prev) => {
			const newTodos = [...prev, newTodo];
			storage.save(STORAGE_TODOS_KEY, newTodos);
			return newTodos;
		});

	const onToggleTodo = (id) => {
		const updateTodos = todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
		setTodos(updateTodos);
		storage.save(STORAGE_TODOS_KEY, updateTodos);
	};

	const onToggleFavorite = (id) => {
		const updateTodos = todos.map((todo) => (todo.id === id ? { ...todo, favorite: !todo.favorite } : todo));
		setTodos(updateTodos);
		storage.save(STORAGE_TODOS_KEY, updateTodos);
	};

	const onDeleteTodo = (id) => {
		const filteredTodo = todos.filter((todo) => todo.id !== id);
		setTodos(filteredTodo);
		storage.save(STORAGE_TODOS_KEY, filteredTodo);
	};

	return (
		<div className="app-container">
			<Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
			<h1 className="app-title">♻Mi lista de tareas</h1>

			{activeTab === Tabs.TODOS && (
				<TodoList
					todos={todos}
					onToggleTodo={onToggleTodo}
					onDeleteTodo={onDeleteTodo}
					onToggleFavorite={onToggleFavorite}
				/>
			)}

			{activeTab === Tabs.FAVORITES && (
				<Favorites
					todos={todos}
					onToggleTodo={onToggleTodo}
					onDeleteTodo={onDeleteTodo}
					onToggleFavorite={onToggleFavorite}
				/>
			)}

			{activeTab === Tabs.NEW_TODOS && <TodoForm addTodo={addTodo} />}
		</div>
	);
};
