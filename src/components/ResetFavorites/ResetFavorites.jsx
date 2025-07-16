import "./ResetFavorites.css";

export const ResetFavorites = ({ onResetFavorites }) => {
	return (
		<div className="reset-favorites-container">
			<button className="reset-favorites-btn" onClick={onResetFavorites}>
				Eliminar Favoritos
			</button>
		</div>
	);
};
