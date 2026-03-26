import type { Meta, StoryObj } from '@storybook/react-vite';
import { WeeklyTimetable } from '../components/organisms';

const meta = {
  title: 'Organisms/WeeklyTimetable',
  component: WeeklyTimetable,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof WeeklyTimetable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    schedule: [
      {
        day: '월',
        date: 1,
        slots: [{ time: '09:00', course: '자료구조', room: '공학관 301' }],
      },
      {
        day: '수',
        date: 3,
        slots: [{ time: '13:00', course: '알고리즘', room: '공학관 201' }],
      },
    ],
  },
};
