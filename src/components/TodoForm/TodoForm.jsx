import { useState } from "react";
import "./TodoForm.css";

const INITIAL_FORM_STATE = { todoText: "" };

export const TodoForm = ({ addTodo }) => {
	const [form, setForm] = useState(INITIAL_FORM_STATE);

	const onFormSubmit = (event) => {
		event.preventDefault();

		if (!form.todoText) console.log("Rellena el campo Texto!!!");

		const newTodo = {
			text: form.todoText,
			completed: false,
			done: false,
			favorite: false,
			id: Date.now(),
		};

		console.log("formulario enviado", newTodo);
		addTodo(newTodo);
		setForm(INITIAL_FORM_STATE);
	};

	const onInputChange = ({ target: { name, value } }) => setForm((prev) => ({ ...prev, [name]: value }));

	return (
		<>
			<h2 className="form-title">✍🏿 Crear nueva tarea</h2>

			<div className="todo-form-container">
				<form action="#" className="todo-form" onSubmit={onFormSubmit}>
					<input
						type="text"
						className="todo-input"
						name="todoText"
						value={form.todoText}
						placeholder="Introduce una tarea"
						onChange={onInputChange}
					/>
					<button className="add-btn" type="submit">
						Añadir
					</button>
				</form>
			</div>
		</>
	);
};
