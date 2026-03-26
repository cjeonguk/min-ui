import * as React from 'react';
import { MoreHorizontal, MessageCircle } from 'lucide-react';
import { Avatar } from '../../atoms/Avatar';
import { Button } from '../../atoms/Button';
import { IconButton } from '../../atoms/IconButton';
import { Tag } from '../../atoms/Tag';

export interface GroupHeaderProps {
  name: string;
  description?: string;
  image?: string;
  category?: string;
  memberCount?: number;
  isPrivate?: boolean;
  isMember?: boolean;
  onJoin?: () => void;
  onLeave?: () => void;
  onChat?: () => void;
  onMoreClick?: () => void;
  className?: string;
}

const GroupHeader = React.forwardRef<HTMLDivElement, GroupHeaderProps>(
  (
    {
      name,
      description,
      image,
      category,
      memberCount,
      isPrivate,
      isMember = false,
      onJoin,
      onLeave,
      onChat,
      onMoreClick,
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] ${className ?? ''}`}
      >
        <div className="h-32 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-secondary-500)]" />

        <div className="px-4 pb-4">
          <div className="flex items-end justify-between -mt-12 mb-4">
            <Avatar
              src={image}
              fallback={name}
              size="xl"
              className="border-4 border-[var(--color-surface-raised)]"
            />
            <div className="flex gap-2">
              {isMember && (
                <>
                  <IconButton
                    icon={MessageCircle}
                    aria-label="채팅"
                    variant="secondary"
                    size="md"
                    onClick={onChat}
                  />
                  <IconButton
                    icon={MoreHorizontal}
                    aria-label="더보기"
                    variant="secondary"
                    size="md"
                    onClick={onMoreClick}
                  />
                </>
              )}
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
                {name}
              </h1>
              {isPrivate && (
                <Tag variant="outline" size="sm">
                  비공개
                </Tag>
              )}
            </div>
            {category && (
              <Tag variant="primary" size="sm">
                {category}
              </Tag>
            )}
          </div>

          {description && (
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              {description}
            </p>
          )}

          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--color-text-tertiary)]">
              멤버 {memberCount ?? 0}명
            </span>
            <div className="flex gap-2">
              {isMember ? (
                <Button variant="secondary" size="sm" onClick={onLeave}>
                  나가기
                </Button>
              ) : (
                <Button variant="primary" size="sm" onClick={onJoin}>
                  가입하기
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
GroupHeader.displayName = 'GroupHeader';

export { GroupHeader };
