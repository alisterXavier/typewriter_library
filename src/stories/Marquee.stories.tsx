import type { Meta, StoryContext, StoryObj } from '@storybook/react';
import React from 'react';
import { Marquee } from '../index';

const meta = {
  title: 'Marquee',
  component: Marquee,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    styles: {
      color: 'black',
      size: 50,
    },
    baseVelocity: 0.3,
    texts: [
      'Typewriter 101',
      'Typewriter 101',
      'Typewriter 101',
      'Typewriter 101',
      'Typewriter 101',
    ],
  },
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

const ParentDecorator = (StoryComponent: React.ComponentType) => (
  <div className="marquee_parent h-[150vh]">
    <StoryComponent />
  </div>
);
export const MarqueeWithParent: Story = {
  decorators: [ParentDecorator],
  args: {
    directional: true,
    parentClassName: 'marquee_parent',
  },
};

export const MarqueeWithoutParent: Story = {
  args: { directional: false, parentClassName: undefined },
};
