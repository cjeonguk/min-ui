import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchBar } from '../components/molecules';

const meta = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: '검색어를 입력하세요...',
  },
};

export const WithValue: Story = {
  args: {
    value: '검색어 예시',
  },
};

export const OnChange: Story = {
  args: {
    onChange: (value: string) => console.log('Search:', value),
  },
};
