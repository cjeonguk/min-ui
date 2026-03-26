import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorBoundary } from '../components/cross-cutting';

const meta = {
  title: 'Cross-cutting/ErrorBoundary',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ErrorBoundary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ErrorBoundary>
      <div className="p-4">
        <p>이 영역은 정상적으로 렌더링됩니다.</p>
      </div>
    </ErrorBoundary>
  ),
} as unknown as Story;
