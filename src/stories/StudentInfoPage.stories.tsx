import type { Meta, StoryObj } from '@storybook/react-vite';
import { StudentInfoPage } from '../components/pages';

const meta = {
  title: 'Pages/StudentInfoPage',
  component: StudentInfoPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof StudentInfoPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
