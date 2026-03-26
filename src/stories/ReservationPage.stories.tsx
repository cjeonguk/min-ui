import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReservationPage } from '../components/pages';

const meta = {
  title: 'Pages/ReservationPage',
  component: ReservationPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ReservationPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
