import * as React from 'react';
import { Send } from 'lucide-react';
import { Avatar } from '../../atoms/Avatar';
import { IconButton } from '../../atoms/IconButton';
import { Textarea } from '../../atoms/Textarea';
import { Divider } from '../../atoms/Divider';
import { MessageBubble } from '../../molecules/MessageBubble';
import type { AvatarProps } from '../../atoms/Avatar';

export interface Message {
  id: string;
  name: string;
  avatar?: string;
  content?: string;
  image?: string;
  time?: Date | string | number;
  isOwn?: boolean;
}

export interface CommentThreadProps {
  comments?: Message[];
  currentUser?: {
    name: string;
    avatar?: string;
  };
  placeholder?: string;
  onSubmit?: (content: string) => void;
  onLoadMore?: () => void;
  hasMore?: boolean;
  className?: string;
}

const CommentThread = React.forwardRef<HTMLDivElement, CommentThreadProps>(
  (
    {
      comments = [],
      currentUser,
      placeholder = '댓글을 입력하세요...',
      onSubmit,
      onLoadMore,
      hasMore = false,
      className,
    },
    ref
  ) => {
    const [content, setContent] = React.useState('');

    const handleSubmit = () => {
      if (content.trim()) {
        onSubmit?.(content);
        setContent('');
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    };

    return (
      <div
        ref={ref}
        className={`flex flex-col rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] ${className ?? ''}`}
      >
        <div className="flex-1 overflow-y-auto p-4">
          {hasMore && (
            <button
              onClick={onLoadMore}
              className="mb-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            >
              이전 댓글 더보기
            </button>
          )}

          {comments.length === 0 ? (
            <p className="text-center text-[var(--color-text-tertiary)] py-8">
              아직 댓글이 없습니다
            </p>
          ) : (
            <div className="space-y-4">
              {comments.map((comment) => (
                <MessageBubble
                  key={comment.id}
                  avatar={
                    comment.avatar
                      ? ({ src: comment.avatar } as AvatarProps)
                      : undefined
                  }
                  name={comment.name}
                  content={comment.content}
                  image={comment.image}
                  time={comment.time}
                  isOwn={comment.isOwn}
                />
              ))}
            </div>
          )}
        </div>

        {currentUser && (
          <>
            <Divider />
            <div className="flex items-end gap-3 p-4">
              <Avatar
                src={currentUser.avatar}
                fallback={currentUser.name}
                size="sm"
              />
              <div className="flex-1">
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={placeholder}
                  className="min-h-[40px] resize-none py-2"
                />
              </div>
              <IconButton
                icon={Send}
                aria-label="전송"
                variant="primary"
                size="sm"
                onClick={handleSubmit}
                disabled={!content.trim()}
              />
            </div>
          </>
        )}
      </div>
    );
  }
);
CommentThread.displayName = 'CommentThread';

export { CommentThread };
