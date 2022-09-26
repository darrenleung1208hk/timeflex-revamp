import React from "react";

const Colors = () => {
	return (
		<div className="h-screen flex flex-col justify-center text-sm">
			<div className="w-fit mx-auto">
				<div className="bg-primary w-56 h-24 p-2 inline-block text-onPrimary">
					Primary
				</div>
				<div className="bg-onPrimary w-56 h-24 p-2 inline-block text-primary">
					On Primary
				</div>
				<div className="bg-primaryContainer w-56 h-24 p-2 inline-block text-onPrimaryContainer">
					Primary Container
				</div>
				<div className="bg-onPrimaryContainer w-56 h-24 p-2 inline-block text-primaryContainer">
					On Primary Container
				</div>
			</div>

			<div className="w-fit mx-auto">
				<div className="bg-secondary w-56 h-24 p-2 inline-block text-onSecondary">
					Secondary
				</div>
				<div className="bg-onSecondary w-56 h-24 p-2 inline-block text-secondary">
					On Secondary
				</div>
				<div className="bg-secondaryContainer w-56 h-24 p-2 inline-block text-onSecondaryContainer">
					Secondary Container
				</div>
				<div className="bg-onSecondaryContainer w-56 h-24 p-2 inline-block text-secondaryContainer">
					On Secondary Container
				</div>
			</div>
		</div>
	);
};

export default Colors;
