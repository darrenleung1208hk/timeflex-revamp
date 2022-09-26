import React from "react";

export const Colors = () => {
	return (
		<div className="py-20 h-screen text-sm bg-[#A8A29E]">
			<div className="container">
				<div className="w-fit">
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

				<div className="w-fit mt-4">
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

				<div className="w-fit mt-4">
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

				<div className="w-fit mt-4">
					<div className="bg-surfaceVariant w-56 h-20 p-2 inline-block text-onSerfaceVariant">
						Surface Variant
					</div>
					<div className="bg-onSurfaceVariant w-56 h-20 p-2 inline-block text-surfaceVariant">
						On Surface Variant
					</div>
					<div className="bg-outline w-56 h-20 p-2 inline-block text-[#ffffff]">
						Outline
					</div>
				</div>

				<div className="w-fit mt-4">
					<div className="bg-error w-56 h-24 p-2 inline-block text-onError">
						Error
					</div>
					<div className="bg-onError w-56 h-24 p-2 inline-block text-error">
						On Error
					</div>
					<div className="bg-errorContainer w-56 h-24 p-2 inline-block text-onErrorContainer">
						Error Container
					</div>
					<div className="bg-onErrorContainer w-56 h-24 p-2 inline-block text-errorContainer">
						On Error Container
					</div>
				</div>
			</div>
		</div>
	);
};
