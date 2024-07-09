import React from "react";

interface PlayerPanelProps {
	winner: number;
}

const PlayerPanel: React.FC<PlayerPanelProps> = ({ winner }) => {
	return (
		<div className="text-gray-800 text-lg">
			<p className={winner === 1 ? "opacity-100" : "opacity-70"}>
				🞨 Player 1 {winner === 1 && "👑"}
			</p>
			<p className={winner === 2 ? "opacity-100" : "opacity-70"}>
				🞅 Player 2 {winner === 2 && "👑"}
			</p>
		</div>
	);
};

export default PlayerPanel;
