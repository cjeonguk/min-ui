import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProfileHeader } from '../components/organisms';

const meta = {
  title: 'Organisms/ProfileHeader',
  component: ProfileHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ProfileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '홍길동',
    email: 'hong@example.com',
    avatar: 'https://picsum.photos/200',
    bio: '서울대학교 컴퓨터공학전공 학생입니다.',
    department: '컴퓨터공학',
    location: '서울',
    followerCount: 150,
    followingCount: 89,
  },
};

export const OwnProfile: Story = {
  args: {
    name: '홍길동',
    email: 'hong@example.com',
    avatar: 'https://picsum.photos/200',
    bio: '서울대학교 컴퓨터공학전공 학생입니다.',
    department: '컴퓨터공학',
    location: '서울',
    isOwn: true,
    followerCount: 150,
    followingCount: 89,
  },
};

export const Following: Story = {
  args: {
    name: '김철수',
    email: 'kim@example.com',
    avatar: 'https://picsum.photos/201',
    bio: '개발자입니다.',
    department: '소프트웨어학',
    isFollowing: true,
    followerCount: 500,
    followingCount: 120,
  },
};
