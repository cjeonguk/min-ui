import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatRoomPage } from '../components/pages';

const meta = {
  title: 'Pages/ChatRoomPage',
  component: ChatRoomPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ChatRoomPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    room: {
      id: '1',
      name: '홍길동',
      avatar: 'https://picsum.photos/200',
      isOnline: true,
    },
    currentUser: {
      name: '나',
      avatar: 'https://picsum.photos/201',
    },
    messages: [
      { id: '1', name: '홍길동', content: '안녕하세요!', time: new Date() },
      {
        id: '2',
        name: '나',
        content: '네, 안녕하세요!',
        time: new Date(),
        isOwn: true,
      },
    ],
  },
};
