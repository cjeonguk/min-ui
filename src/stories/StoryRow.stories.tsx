import type { Meta, StoryObj } from '@storybook/react-vite';
import { StoryRow } from '../components/organisms';

const meta = {
  title: 'Organisms/StoryRow',
  component: StoryRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof StoryRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stories: [
      { id: '1', name: '홍길동', isViewed: false },
      { id: '2', name: '김철수', isViewed: true },
      { id: '3', name: '이영희', isViewed: false },
      { id: '4', name: '박민수', isViewed: true },
      { id: '5', name: '최지우', isViewed: false },
    ],
  },
};
