import type { Meta, StoryObj } from '@storybook/react-vite';
import { GroupPage } from '../components/pages';

const meta = {
  title: 'Pages/GroupPage',
  component: GroupPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof GroupPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    group: {
      id: '1',
      name: '서울대 MT同年会',
      description: '신입생 MT를 위한 친목 단체입니다',
      category: '친목',
      memberCount: 156,
    },
    isMember: true,
    currentUser: {
      id: '1',
      name: '홍길동',
      avatar: 'https://picsum.photos/200',
    },
  },
};
