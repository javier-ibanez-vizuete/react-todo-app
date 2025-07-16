import "./ResetApp.css";

export const ResetApp = ({ onResetApp }) => {
	return (
		<div className="reset-app-container">
			<button className="reset-app-btn" onClick={onResetApp}>
				Borrar Tareas
			</button>
		</div>
	);
};
