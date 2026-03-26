import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProfilePage } from '../components/pages';

const meta = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      id: '1',
      name: '홍길동',
      email: 'hong@example.com',
      avatar: 'https://picsum.photos/200',
      bio: '서울대학교 컴퓨터공학전공 학생입니다.',
      department: '컴퓨터공학',
      location: '서울',
      followerCount: 150,
      followingCount: 89,
    },
    isOwnProfile: true,
  },
};
