import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReactionBar } from '../components/molecules';
import * as LucideIcons from 'lucide-react';

const meta = {
  title: 'Molecules/ReactionBar',
  component: ReactionBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ReactionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    reactions: [
      { icon: LucideIcons.ThumbsUp, label: '좋아요', count: 12 },
      { icon: LucideIcons.MessageCircle, label: '댓글', count: 5 },
      { icon: LucideIcons.Share, label: '공유' },
    ],
  },
};

export const WithActiveReaction: Story = {
  args: {
    reactions: [
      {
        icon: LucideIcons.ThumbsUp,
        label: '좋아요',
        count: 12,
        isActive: true,
      },
      { icon: LucideIcons.MessageCircle, label: '댓글', count: 5 },
      { icon: LucideIcons.Share, label: '공유' },
    ],
  },
};

export const NoCounts: Story = {
  args: {
    reactions: [
      { icon: LucideIcons.ThumbsUp, label: '좋아요' },
      { icon: LucideIcons.Heart, label: '하트' },
      { icon: LucideIcons.Smile, label: '웃음' },
    ],
  },
};

export const Interactive: Story = {
  args: {
    reactions: [
      { icon: LucideIcons.ThumbsUp, label: '좋아요', count: 12 },
      { icon: LucideIcons.MessageCircle, label: '댓글', count: 5 },
      { icon: LucideIcons.Share, label: '공유' },
    ],
  },
};
