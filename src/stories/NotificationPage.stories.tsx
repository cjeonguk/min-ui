import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotificationPage } from '../components/pages';

const meta = {
  title: 'Pages/NotificationPage',
  component: NotificationPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NotificationPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
