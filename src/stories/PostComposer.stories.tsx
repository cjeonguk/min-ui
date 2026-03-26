import type { Meta, StoryObj } from '@storybook/react-vite';
import { PostComposer } from '../components/organisms';

const meta = {
  title: 'Organisms/PostComposer',
  component: PostComposer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof PostComposer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithUser: Story = {
  args: {
    user: {
      name: '홍길동',
      avatar: 'https://picsum.photos/200',
    },
  },
};

export const Focused: Story = {
  args: {
    user: {
      name: '홍길동',
      avatar: 'https://picsum.photos/200',
    },
    placeholder: '무슨 생각을 하고 있나요?',
  },
};
