import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppHeader } from '../components/organisms';

const meta = {
  title: 'Organisms/AppHeader',
  component: AppHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof AppHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithUser: Story = {
  args: {
    user: {
      name: '홍길동',
      avatar: 'https://picsum.photos/200',
    },
    notificationCount: 5,
  },
};

export const WithNotificationBadge: Story = {
  args: {
    user: {
      name: '홍길동',
      avatar: 'https://picsum.photos/200',
    },
    notificationCount: 99,
  },
};
