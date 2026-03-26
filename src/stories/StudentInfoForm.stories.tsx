import type { Meta, StoryObj } from '@storybook/react-vite';
import { StudentInfoForm } from '../components/organisms';

const meta = {
  title: 'Organisms/StudentInfoForm',
  component: StudentInfoForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof StudentInfoForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
