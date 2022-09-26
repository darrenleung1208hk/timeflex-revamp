import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Colors } from "./Colors";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Colors",
	component: Colors,
} as ComponentMeta<typeof Colors>;

export const Default: ComponentStory<typeof Colors> = () => <Colors />;
