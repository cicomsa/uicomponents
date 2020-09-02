import React from 'react';
import Card from './index';
import Title from '../Title'

export default {
  title: 'Example/Card',
  component: Card
};

const Template = (args) => <Card {...args} />;

export const ContentFit = Template.bind({});
ContentFit.args = {
  contentFit: true,
  children: <Title title="Card title" />
};

export const FixedWidth = Template.bind({});
FixedWidth.args = {
  width: '50%',
  children: <Title title="Card title" />
};

export const CenteredFixedWidth = Template.bind({});
CenteredFixedWidth.args = {
  centered: true,
  width: '50%',
  children: <Title title="Card title" />
};

