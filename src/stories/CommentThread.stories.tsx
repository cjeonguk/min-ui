import type { Meta, StoryObj } from '@storybook/react-vite';
import { CommentThread } from '../components/organisms';

const meta = {
  title: 'Organisms/CommentThread',
  component: CommentThread,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CommentThread>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentUser: {
      name: '나',
      avatar: 'https://picsum.photos/200',
    },
    comments: [
      { id: '1', name: '홍길동', content: '좋은 글이네요!', time: new Date() },
      { id: '2', name: '김철수', content: '동의합니다~', time: new Date() },
      {
        id: '3',
        name: '나',
        content: '감사합니다!',
        time: new Date(),
        isOwn: true,
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    currentUser: {
      name: '나',
      avatar: 'https://picsum.photos/200',
    },
    comments: [],
  },
};

export const WithMore: Story = {
  args: {
    currentUser: {
      name: '나',
      avatar: 'https://picsum.photos/200',
    },
    comments: [
      { id: '1', name: '홍길동', content: '좋은 글이네요!', time: new Date() },
    ],
    hasMore: true,
  },
};
