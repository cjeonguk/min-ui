import type { Meta, StoryObj } from '@storybook/react-vite';
import { BottomNavBar } from '../components/organisms';
import { Home, Search, PlusSquare, MessageCircle, User } from 'lucide-react';

const meta = {
  title: 'Organisms/BottomNavBar',
  component: BottomNavBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof BottomNavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithBadge: Story = {
  args: {
    items: [
      { icon: Home, label: '홈' },
      { icon: Search, label: '검색' },
      { icon: PlusSquare, label: '작성' },
      { icon: MessageCircle, label: '채팅', badge: 5 },
      { icon: User, label: '프로필' },
    ],
  },
};
