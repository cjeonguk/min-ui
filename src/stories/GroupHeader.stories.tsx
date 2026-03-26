import type { Meta, StoryObj } from '@storybook/react-vite';
import { GroupHeader } from '../components/organisms';

const meta = {
  title: 'Organisms/GroupHeader',
  component: GroupHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof GroupHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '서울대 MT同年会',
    memberCount: 156,
    isMember: false,
  },
};

export const IsMember: Story = {
  args: {
    name: '서울대 MT同年会',
    memberCount: 156,
    isMember: true,
  },
};
