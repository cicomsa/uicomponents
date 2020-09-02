import React from 'react';
import AccordionSection from './index';

export default {
  title: 'Example/AccordionSection',
  component: AccordionSection
};

const Template = (args) => <AccordionSection {...args} />;

export const Main = Template.bind({});
Main.args = {
  section: {
    title: 'contentOne',
    buttonCopy: 'Open Content 1',
    content: <p>Content 1</p>,
  },
  reference: { current: null }
}
