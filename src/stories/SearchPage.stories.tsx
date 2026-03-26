import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchPage } from '../components/pages';

const meta = {
  title: 'Pages/SearchPage',
  component: SearchPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SearchPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
