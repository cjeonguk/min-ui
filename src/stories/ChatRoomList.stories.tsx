import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatRoomList } from '../components/organisms';

const meta = {
  title: 'Organisms/ChatRoomList',
  component: ChatRoomList,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ChatRoomList>;

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
        preview: '회의 시간 알려주세요',
        time: new Date(),
        unreadCount: 3,
      },
      {
        id: '3',
        name: '이영희',
        preview: '알겠습니다~',
        time: new Date(),
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    rooms: [],
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
