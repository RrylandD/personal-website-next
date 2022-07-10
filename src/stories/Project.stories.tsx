import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProjectComponent from "../components/Project";

export default {
    title: 'Core/Project',
    component: ProjectComponent,
} as ComponentMeta<typeof ProjectComponent>

const Template: ComponentStory<typeof ProjectComponent> = (args) => <ProjectComponent {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  projectName: 'Project Name',
  thumbnail: 'https://assets.vercel.com/image/upload/q_auto/front/assets/design/white-nextjs.png',
  technologies: ['tech one', 'tech two']
};