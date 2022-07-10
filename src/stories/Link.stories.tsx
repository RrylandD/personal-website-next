import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Link } from "../components/Link";

export default {
    title: 'Core/Link',
    component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const LinkedIn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LinkedIn.args = {
  name: 'LinkedIn',
  url: 'https://www.linkedin.com/in/ryland-donovan-741952b7/',
};

export const Github = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Github.args = {
  name: 'Github',
  url: 'https://github.com/RrylandD',
};