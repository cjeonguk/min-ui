import type { Meta, StoryObj } from '@storybook/react-vite';
import { AdminApprovalQueue } from '../components/organisms';

const meta = {
  title: 'Organisms/AdminApprovalQueue',
  component: AdminApprovalQueue,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof AdminApprovalQueue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    requests: [
      {
        id: '1',
        name: '홍길동',
        email: 'hong@example.com',
        requestedAt: new Date(),
      },
      {
        id: '2',
        name: '김철수',
        email: 'kim@example.com',
        requestedAt: new Date(),
      },
    ],
  },
};
