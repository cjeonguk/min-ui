import type { Meta, StoryObj } from '@storybook/react-vite';
import { SideNavBar } from '../components/organisms';

const meta = {
  title: 'Organisms/SideNavBar',
  component: SideNavBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SideNavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Open: Story = {
  args: {
    isOpen: true,
    user: {
      name: '홍길동',
      avatar: 'https://picsum.photos/200',
    },
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    user: {
      name: '홍길동',
      avatar: 'https://picsum.photos/200',
    },
  },
};
