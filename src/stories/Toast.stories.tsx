import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastProvider,
} from '../components/cross-cutting';

const meta = {
  title: 'Cross-cutting/Toast',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <Toast defaultOpen>
        <ToastTitle>알림</ToastTitle>
        <ToastDescription>메시지가 전송되었습니다.</ToastDescription>
      </Toast>
    </ToastProvider>
  ),
} as unknown as Story;
