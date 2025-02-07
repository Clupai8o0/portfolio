"use client";

import Noise from "@/components/content/noise";

function NotFound() {
	return (
		<div className="w-screen h-screen flex items-center justify-center">
      <h1 className="font-medium text-5xl text-white opacity-40">
        Oops! Looks like you're lost...
      </h1>
			<Noise
				patternSize={250}
				patternScaleX={1}
				patternScaleY={1}
				patternRefreshInterval={2}
				patternAlpha={24}
			/>
		</div>
	);
}

export default NotFound;
