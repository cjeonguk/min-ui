import type { Meta, StoryObj } from '@storybook/react-vite';
import { GroupList } from '../components/organisms';

const meta = {
  title: 'Organisms/GroupList',
  component: GroupList,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof GroupList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groups: [
      {
        id: '1',
        name: '서울대 MT同年会',
        description: '신입생 MT를 위한 친목 단체입니다',
        category: '친목',
        memberCount: 156,
      },
      {
        id: '2',
        name: '자료구조 스터디',
        description: '매주 금요일 저녁 자료구조 스터디',
        category: '학업',
        memberCount: 24,
      },
    ],
  },
};
