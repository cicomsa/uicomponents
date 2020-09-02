import React from 'react';
import Accordion from './index';
import accordionData from './data'

export default {
  title: 'Example/Accordion',
  component: Accordion
};

const Template = (args) => <Accordion {...args} />;

export const Main = Template.bind({});
Main.args = {
  accordionData
}
