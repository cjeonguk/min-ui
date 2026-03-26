import * as React from 'react';
import {
  MoreHorizontal,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
} from 'lucide-react';
import { Avatar } from '../../atoms/Avatar';
import { ImageThumb } from '../../atoms/ImageThumb';
import { IconButton } from '../../atoms/IconButton';
import { ReactionBar } from '../../molecules/ReactionBar';
import { TimeBadge } from '../../atoms/TimeBadge';

export interface PostAuthor {
  id: string;
  name: string;
  avatar?: string;
}

export interface PostImage {
  url: string;
  alt?: string;
}

export interface PostProps {
  author: PostAuthor;
  content?: string;
  images?: PostImage[];
  createdAt?: Date | string | number;
  likeCount?: number;
  commentCount?: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
  onAuthorClick?: () => void;
  onImageClick?: (index: number) => void;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onBookmark?: () => void;
  onMoreClick?: () => void;
  className?: string;
}

const Post = React.forwardRef<HTMLDivElement, PostProps>(
  (
    {
      author,
      content,
      images,
      createdAt,
      likeCount = 0,
      commentCount = 0,
      isLiked = false,
      isBookmarked = false,
      onAuthorClick,
      onImageClick,
      onLike,
      onComment,
      onShare,
      onBookmark,
      onMoreClick,
      className,
    },
    ref
  ) => {
    return (
      <article
        ref={ref}
        className={`overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] ${className ?? ''}`}
      >
        <div className="flex items-center justify-between p-4">
          <button onClick={onAuthorClick} className="flex items-center gap-3">
            <Avatar src={author.avatar} fallback={author.name} size="md" />
            <div>
              <p className="font-medium text-[var(--color-text-primary)]">
                {author.name}
              </p>
              {createdAt && <TimeBadge date={createdAt} size="xs" />}
            </div>
          </button>
          <IconButton
            icon={MoreHorizontal}
            aria-label="더보기"
            variant="ghost"
            size="sm"
            onClick={onMoreClick}
          />
        </div>

        {content && (
          <div className="px-4 pb-2">
            <p className="whitespace-pre-wrap text-[var(--color-text-primary)]">
              {content}
            </p>
          </div>
        )}

        {images && images.length > 0 && (
          <div
            className={`grid gap-1 ${
              images.length === 1
                ? 'grid-cols-1'
                : images.length === 2
                  ? 'grid-cols-2'
                  : 'grid-cols-2 grid-rows-2'
            }`}
          >
            {images.slice(0, 4).map((image, index) => (
              <button
                key={index}
                onClick={() => onImageClick?.(index)}
                className="relative aspect-square overflow-hidden"
              >
                <ImageThumb
                  src={image.url}
                  alt={image.alt}
                  aspect="square"
                  className="w-full h-full"
                />
                {index === 3 && images.length > 4 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <span className="text-lg font-bold text-white">
                      +{images.length - 4}
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        <div className="p-4">
          <ReactionBar
            reactions={[
              {
                icon: Heart,
                label: '좋아요',
                count: likeCount,
                isActive: isLiked,
                onClick: onLike,
              },
              {
                icon: MessageCircle,
                label: '댓글',
                count: commentCount,
                onClick: onComment,
              },
              {
                icon: Share2,
                label: '공유',
                onClick: onShare,
              },
            ]}
            className="mb-3"
          />
          <div className="flex items-center justify-end">
            <IconButton
              icon={Bookmark}
              aria-label={isBookmarked ? '북마크 해제' : '북마크'}
              variant="ghost"
              size="sm"
              onClick={onBookmark}
              className={isBookmarked ? 'text-[var(--color-primary-600)]' : ''}
            />
          </div>
        </div>
      </article>
    );
  }
);
Post.displayName = 'Post';

export { Post };
