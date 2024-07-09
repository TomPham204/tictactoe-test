import React from "react";
import Image from "next/image";

interface GameBoardProps {
	board: number[][];
	setBoard: React.Dispatch<React.SetStateAction<number[][]>>;
	currentPlayer: number;
	isGameEnd: boolean;
}

const GameBoard: React.FC<GameBoardProps> = ({
	board,
	setBoard,
	currentPlayer,
	isGameEnd,
}) => {
	const handleClick = (rowIndex: number, colIndex: number) => {
		const newBoard = [...board.map((row) => [...row])];

		if (newBoard[rowIndex][colIndex] === 0) {
			newBoard[rowIndex][colIndex] = currentPlayer;
		}
		setBoard(newBoard);
	};

	return (
		<div className="flex flex-col gap-3">
			<p className="text-gray-800 font-bold mx-auto">Game board</p>
			<div className="grid grid-cols-3 grid-rows-3 gap-3 p-3 rounded-lg border-2 border-gray-500 border-dashed">
				{board.map((row, rowIndex) =>
					row.map((tile, colIndex) => (
						<button
							className={`rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out aspect-square ${
								isGameEnd
									? "cursor-not-allowed opacity-70 hover:shadow"
									: "cursor-pointer opacity-100"
							}`}
							key={`${rowIndex}${colIndex}`}
							onClick={() => handleClick(rowIndex, colIndex)}
							disabled={isGameEnd}
						>
							{tile === 0 ? (
								<Image
									src="/resource/homepage/tile_default.png"
									width={80}
									height={80}
									alt="Empty tile"
									priority
								/>
							) : tile === 1 ? (
								<Image
									src="/resource/homepage/tile_x.png"
									width={80}
									height={80}
									alt="Player 1's tile"
								/>
							) : (
								<Image
									src="/resource/homepage/tile_o.png"
									width={80}
									height={80}
									alt="Player 2's tile"
								/>
							)}
						</button>
					))
				)}
			</div>
		</div>
	);
};

export default GameBoard;
