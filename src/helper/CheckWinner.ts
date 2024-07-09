export default function checkIfWinnerExist(board: number[][]): number {
	// There are multiple ways to check for a winner. Since the board size is limited to 3x3 which equals the # of continuous marks needed to win, we can use a brute force approach for O(n) time complexity; we can also use loops for O(n^2) time complexity. The bruteforce approach is the most clean and readable.

	// During my first year, I somewhat optimized the loop approach for caro chess (20x20 board size and winning = 5 continuous marks) to some extent by skipping some checks if I remember correctly. The code was written in C and can be found at https://github.com/TomPham204/Caro-C. When I wrote it, only God and I knew what the code did. Now, only God knows, so if you have any questions, please ask him, not me.

	//bruteforce approach
	const winningPatterns = [
		// rows
		[board[0][0], board[0][1], board[0][2]],
		[board[1][0], board[1][1], board[1][2]],
		[board[2][0], board[2][1], board[2][2]],
		// columns
		[board[0][0], board[1][0], board[2][0]],
		[board[0][1], board[1][1], board[2][1]],
		[board[0][2], board[1][2], board[2][2]],
		// diagonals
		[board[0][0], board[1][1], board[2][2]],
		[board[0][2], board[1][1], board[2][0]],
	];

	for (const pattern of winningPatterns) {
		const [tile1, tile2, tile3] = pattern;
		if (tile1 !== 0 && tile1 === tile2 && tile2 === tile3) {
			return tile1;
		}
	}

	// check for tie
	if (board.flat().every((tile) => tile !== 0)) {
		return 0;
	}

	// no winner yet
	return -1;
}
