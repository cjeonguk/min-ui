import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../components/molecules';
import { Button } from '../components/atoms';

const meta = {
  title: 'Molecules/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu trigger={<Button variant="secondary">메뉴</Button>}>
      <DropdownMenuItem>프로필 보기</DropdownMenuItem>
      <DropdownMenuItem>설정</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="danger">로그아웃</DropdownMenuItem>
    </DropdownMenu>
  ),
} as unknown as Story;
