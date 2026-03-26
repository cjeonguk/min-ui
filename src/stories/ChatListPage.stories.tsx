import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatListPage } from '../components/pages';

const meta = {
  title: 'Pages/ChatListPage',
  component: ChatListPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ChatListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rooms: [
      {
        id: '1',
        name: '홍길동',
        preview: '안녕하세요!',
        time: new Date(),
        isOnline: true,
      },
      {
        id: '2',
        name: '김철수',
        preview: '회의 시간...',
        time: new Date(),
        unreadCount: 3,
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    rooms: [],
  },
};
