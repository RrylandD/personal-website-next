import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconComponent from "../components/IconComponent";

export default {
    title: 'Core/Icon',
    component: IconComponent,
} as ComponentMeta<typeof IconComponent>

const Template: ComponentStory<typeof IconComponent> = (args) => <IconComponent {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: 'default'
};

export const LinkedIn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LinkedIn.args = {
  name: 'LinkedIn'
};

export const Github = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Github.args = {
  name: 'Github'
};