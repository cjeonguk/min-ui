import type { Meta, StoryObj } from '@storybook/react-vite';
import { CourseInputForm } from '../components/organisms';

const meta = {
  title: 'Organisms/CourseInputForm',
  component: CourseInputForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CourseInputForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
