import type { Meta, StoryObj } from '@storybook/react-vite';
import { StoryViewer } from '../components/organisms';

const meta = {
  title: 'Organisms/StoryViewer',
  component: StoryViewer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof StoryViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stories: [
      { id: '1', name: '홍길동', avatar: 'https://picsum.photos/200' },
      { id: '2', name: '김철수', avatar: 'https://picsum.photos/201' },
      { id: '3', name: '이영희', avatar: 'https://picsum.photos/202' },
    ],
    initialIndex: 0,
  },
};
