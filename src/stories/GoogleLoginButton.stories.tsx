import type { Meta, StoryObj } from '@storybook/react-vite';
import { GoogleLoginButton } from '../components/organisms';

const meta = {
  title: 'Organisms/GoogleLoginButton',
  component: GoogleLoginButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GoogleLoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
