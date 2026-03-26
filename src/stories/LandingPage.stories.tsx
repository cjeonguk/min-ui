import type { Meta, StoryObj } from '@storybook/react-vite';
import { LandingPage } from '../components/pages';

const meta = {
  title: 'Pages/LandingPage',
  component: LandingPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
