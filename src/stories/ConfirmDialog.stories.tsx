import type { Meta, StoryObj } from '@storybook/react-vite';
import { ConfirmDialog } from '../components/cross-cutting';

const meta = {
  title: 'Cross-cutting/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ConfirmDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ConfirmDialog
      open
      title="정말 삭제하시겠습니까?"
      description="이 작업은 되돌릴 수 없습니다."
      confirmText="삭제"
      cancelText="취소"
      onConfirm={() => console.log('confirmed')}
    />
  ),
} as unknown as Story;

export const Danger: Story = {
  render: () => (
    <ConfirmDialog
      open
      title="계정을 삭제하시겠습니까?"
      description="모든 데이터가 영구적으로 삭제됩니다."
      confirmText="삭제"
      cancelText="취소"
      variant="danger"
      onConfirm={() => console.log('deleted')}
    />
  ),
} as unknown as Story;
