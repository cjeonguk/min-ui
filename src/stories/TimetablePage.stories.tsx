import type { Meta, StoryObj } from '@storybook/react-vite';
import { TimetablePage } from '../components/pages';

const meta = {
  title: 'Pages/TimetablePage',
  component: TimetablePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TimetablePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
