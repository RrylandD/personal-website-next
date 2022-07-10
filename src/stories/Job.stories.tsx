import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import JobComponent from "../components/Job";

export default {
    title: 'Core/Job',
    component: JobComponent,
} as ComponentMeta<typeof JobComponent>

const Template: ComponentStory<typeof JobComponent> = (args) => <JobComponent {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  companyName: 'Company Name',
  jobTitle: 'Job Title',
  technologies: ['tech one', 'tech two']
};