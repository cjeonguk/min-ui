import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReservationGrid } from '../components/organisms';

const meta = {
  title: 'Organisms/ReservationGrid',
  component: ReservationGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ReservationGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slots: [
      { id: '1', time: '09:00', status: 'available' },
      { id: '2', time: '10:00', status: 'booked' },
      { id: '3', time: '11:00', status: 'mine' },
      { id: '4', time: '12:00', status: 'available' },
      { id: '5', time: '13:00', status: 'available' },
      { id: '6', time: '14:00', status: 'booked' },
    ],
  },
};
