import type { Meta, StoryObj } from '@storybook/react-vite';
import { Post } from '../components/organisms';

const meta = {
  title: 'Organisms/PostCard',
  component: Post,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author: {
      id: '1',
      name: '홍길동',
      avatar: 'https://picsum.photos/200?1',
    },
    content: '오늘 날씨가 정말 좋네요! 모두 좋은 하루 보내세요.',
    createdAt: new Date(),
    likeCount: 12,
    commentCount: 5,
  },
};

export const WithImage: Story = {
  args: {
    author: {
      id: '1',
      name: '김철수',
      avatar: 'https://picsum.photos/200?2',
    },
    content: '강의실 풍경',
    images: [{ url: 'https://picsum.photos/800/600', alt: '강의실' }],
    createdAt: new Date(),
    likeCount: 45,
    commentCount: 3,
  },
};

export const WithMultipleImages: Story = {
  args: {
    author: {
      id: '1',
      name: '이영희',
      avatar: 'https://picsum.photos/200?3',
    },
    content: 'MT에서 찍은 사진들!',
    images: [
      { url: 'https://picsum.photos/200?10', alt: '사진1' },
      { url: 'https://picsum.photos/200?11', alt: '사진2' },
      { url: 'https://picsum.photos/200?12', alt: '사진3' },
      { url: 'https://picsum.photos/200?13', alt: '사진4' },
    ],
    createdAt: new Date(),
    likeCount: 128,
    commentCount: 24,
  },
};

export const Liked: Story = {
  args: {
    author: {
      id: '1',
      name: '박민수',
    },
    content: '좋아요를 눌러주세요!',
    createdAt: new Date(),
    likeCount: 99,
    commentCount: 10,
    isLiked: true,
    isBookmarked: true,
  },
};

export const PostList: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-lg">
      <Post
        author={{
          id: '1',
          name: '홍길동',
          avatar: 'https://picsum.photos/200?1',
        }}
        content="첫 번째 게시물입니다."
        createdAt={new Date()}
        likeCount={5}
        commentCount={2}
      />
      <Post
        author={{
          id: '2',
          name: '김철수',
          avatar: 'https://picsum.photos/200?2',
        }}
        content="두 번째 게시물입니다."
        createdAt={new Date()}
        likeCount={10}
        commentCount={3}
      />
    </div>
  ),
} as unknown as Story;
