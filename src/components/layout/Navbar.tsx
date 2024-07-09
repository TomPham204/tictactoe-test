import React from "react";

interface NavbarProps {
	resetPlay: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ resetPlay }) => {
	return (
		<div className="flex justify-between items-center p-2 w-full shadow">
			<p className="text-lg font-bold text-gray-800 capitalize">
				Tic-tac-toe FE Test
			</p>
			<button
				onClick={() => resetPlay()}
				className="text-gray-800 px-2 py-1.5 rounded-lg shadow bg-gray-200 hover:bg-gray-100 transition-all duration-300	ease-in-out"
			>
				Reset
			</button>
		</div>
	);
};

export default Navbar;
