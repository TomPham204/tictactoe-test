import React, { useState, useEffect } from "react";

interface ClockTimerProps {
	count: number;
}

const ClockTimer: React.FC<ClockTimerProps> = ({ count }) => {
	return (
		<div
			className={
				"aspect-square w-20 p-2 border border-gray-300 rounded-full flex items-center justify-center " +
				`${count <= 3 ? "bg-red-500" : "bg-slate-100"}`
			}
		>
			<p className="font-bold text-black text-lg">{`${count}s`}</p>
		</div>
	);
};

export default ClockTimer;
