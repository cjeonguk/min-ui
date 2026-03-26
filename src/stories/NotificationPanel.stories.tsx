import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotificationPanel } from '../components/organisms';

const meta = {
  title: 'Organisms/NotificationPanel',
  component: NotificationPanel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NotificationPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    notifications: [
      {
        id: '1',
        title: '홍길동님이 댓글을 달았습니다',
        description: '게시물: 오늘의 수업이 재미있었어요!',
        time: new Date(),
        isRead: false,
      },
      {
        id: '2',
        title: '김철수님이 좋아요를 눌렀습니다',
        time: new Date(),
        isRead: false,
      },
      {
        id: '3',
        title: '이영희님이 팔로우했습니다',
        time: new Date(),
        isRead: true,
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    isOpen: true,
    notifications: [],
  },
};
