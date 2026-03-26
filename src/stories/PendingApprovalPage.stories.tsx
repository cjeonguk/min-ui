import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingApprovalPage } from '../components/pages';

const meta = {
  title: 'Pages/PendingApprovalPage',
  component: PendingApprovalPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PendingApprovalPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
