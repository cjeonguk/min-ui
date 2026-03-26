import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatWindow } from '../components/organisms';

const meta = {
  title: 'Organisms/ChatWindow',
  component: ChatWindow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ChatWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    recipient: {
      name: '홍길동',
      avatar: 'https://picsum.photos/200',
      isOnline: true,
    },
    currentUser: {
      name: '나',
      avatar: 'https://picsum.photos/201',
    },
    messages: [
      {
        id: '1',
        name: '홍길동',
        content: '안녕하세요!',
        time: new Date(),
        isOwn: false,
      },
      {
        id: '2',
        name: '나',
        content: '네, 안녕하세요!',
        time: new Date(),
        isOwn: true,
      },
      {
        id: '3',
        name: '홍길동',
        content: '오늘 시간 괜찮으세요?',
        time: new Date(),
        isOwn: false,
      },
    ],
  },
};
