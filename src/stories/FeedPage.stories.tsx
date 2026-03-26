import type { Meta, StoryObj } from '@storybook/react-vite';
import { FeedPage } from '../components/pages';

const meta = {
  title: 'Pages/FeedPage',
  component: FeedPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeedPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: { id: '1', name: '홍길동', avatar: 'https://picsum.photos/200' },
    stories: [
      {
        id: '1',
        user: { id: '1', name: '홍길동', avatar: 'https://picsum.photos/200' },
        hasStory: true,
        viewed: false,
      },
      {
        id: '2',
        user: { id: '2', name: '김철수' },
        hasStory: true,
        viewed: true,
      },
    ],
    posts: [
      {
        id: '1',
        author: {
          id: '1',
          name: '홍길동',
          avatar: 'https://picsum.photos/200',
        },
        content: '오늘 날씨가 정말 좋네요!',
        createdAt: new Date(),
        likeCount: 12,
        commentCount: 5,
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    user: { id: '1', name: '홍길동', avatar: 'https://picsum.photos/200' },
    stories: [],
    posts: [],
  },
};

export const Loading: Story = {
  args: {
    user: { id: '1', name: '홍길동', avatar: 'https://picsum.photos/200' },
    isLoading: true,
  },
};
