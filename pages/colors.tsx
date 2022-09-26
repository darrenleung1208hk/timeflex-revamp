import React from "react";

const Colors = () => {
	return (
		<div className="h-screen flex flex-col justify-center text-sm">
			<div className="w-fit mx-auto">
				<div className="bg-primary w-40 h-24 p-2 inline-block text-onPrimary">
					Primary
				</div>
				<div className="bg-onPrimary w-40 h-24 p-2 inline-block text-primary">
					On Primary
				</div>
				<div className="bg-primaryContainer w-40 h-24 p-2 inline-block text-onPrimaryContainer">
					Primary Container
				</div>
				<div className="bg-onPrimaryContainer w-40 h-24 p-2 inline-block text-primaryContainer">
					On Primary Container
				</div>
			</div>
		</div>
	);
};

export default Colors;
