"use client";

import GameBoard from "@/components/homepage/GameBoard";
import Navbar from "@/components/layout/Navbar";
import { useState, useEffect, useRef } from "react";
import PlayerPanel from "@/components/homepage/PlayerPanel";
import ClockTimer from "@/components/homepage/ClockTimer";
import checkIfWinnerExist from "@/helper/CheckWinner";

export default function Home() {
	const [count, setCount] = useState<number>(5);
	const [currentPlayer, setCurrentPlayer] = useState<number>(1);
	const [winner, setWinner] = useState<number>(-1);
	const [isGameEnd, setIsGameEnd] = useState<boolean>(false);
	const interval = useRef<NodeJS.Timeout>();
	const [board, setBoard] = useState<number[][]>([
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	]);

	const resetPlay = () => {
		setBoard([
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		]);
		setCurrentPlayer(2);
		setCount(5);
		setWinner(-1);
		setIsGameEnd(false);
	};

	useEffect(() => {
		if (!isGameEnd) {
			interval.current = setInterval(() => {
				setCount((prevCount) => prevCount - 1);
			}, 1000);

			if (count === 0) {
				setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
				setCount(5);
			}
		}

		return () => clearInterval(interval.current);
	}, [count, isGameEnd]);

	useEffect(() => {
		const winner = checkIfWinnerExist(board);
		setWinner(winner);

		if (winner !== -1) {
			clearInterval(interval.current);
			setIsGameEnd(true);
		} else {
			setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
			setCount(5);
		}
	}, [board]);

	return (
		<main className="flex min-h-screen flex-col gap-2 bg-[#f4f4f4]">
			<Navbar resetPlay={resetPlay} />
			<div className="w-full max-w-screen-lg mx-auto grid auto-rows-max grid-rows-4 md:grid-cols-2 lg:grid-rows-2 p-5 md:gap-5 justify-center justify-items-center align-middle items-center">
				<div className="order-3 md:order-1 row-span-2">
					<GameBoard
						board={board}
						setBoard={setBoard}
						currentPlayer={currentPlayer}
						isGameEnd={isGameEnd}
					/>
				</div>
				<div className="order-1 md:order-2 self-end">
					<ClockTimer count={count} />
				</div>
				<div className="order-2 md:order-3 self-start">
					<PlayerPanel winner={winner} />
				</div>
			</div>
		</main>
	);
}
