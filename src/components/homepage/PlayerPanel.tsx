import React from "react";

interface PlayerPanelProps {
	winner: number;
}

const PlayerPanel: React.FC<PlayerPanelProps> = ({ winner }) => {
	return (
		<div className="text-gray-800 text-lg">
			{winner !== 0 && (
				<p
					className={
						winner === 1 && winner > 0
							? "opacity-100"
							: "opacity-50"
					}
				>
					🞨 Player 1 {winner === 1 && winner > 0 && "👑"}
				</p>
			)}
			{winner !== 0 && (
				<p
					className={
						winner === 2 && winner > 0
							? "opacity-100"
							: "opacity-50"
					}
				>
					🞅 Player 2 {winner === 2 && winner > 0 && "👑"}
				</p>
			)}
			{winner === 0 && <p>🤝 Draw</p>}
		</div>
	);
};

export default PlayerPanel;
