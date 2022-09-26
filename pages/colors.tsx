import React from "react";

const Colors = () => {
	return (
		<div className="h-screen flex flex-col justify-center text-sm bg-[#A8A29E]">
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

			<div className="w-fit mx-auto mt-4">
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

			<div className="w-fit mx-auto mt-4">
				<div className="bg-background w-56 h-24 p-2 inline-block text-onBackground">
					Background
				</div>
				<div className="bg-onBackground w-56 h-24 p-2 inline-block text-background">
					On Background
				</div>
				<div className="bg-surface w-56 h-24 p-2 inline-block text-onSurface">
					Surface
				</div>
				<div className="bg-onSurface w-56 h-24 p-2 inline-block text-surface">
					On Surface
				</div>
			</div>
		</div>
	);
};

export default Colors;
