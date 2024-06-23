import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StaggerText } from '../index';

const meta = {
  title: 'StaggerText',
  component: StaggerText,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    text: 'A Full-Stack Developer',
    styles: {
      color: 'black',
      size: 30,
    },
    from: {
      translateY: 100,
      opacity: 0,
    },
    staggerAmt: 0.1,
    delay: 0.4,
    duration: 0.5,
  },
} satisfies Meta<typeof StaggerText>;

export default meta;
type Story = StoryObj<typeof meta>;
export const StaggerTextComp: Story = {};
