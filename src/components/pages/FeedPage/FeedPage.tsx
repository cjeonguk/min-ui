import * as React from 'react';
import { AppHeader } from '../../organisms';
import { BottomNavBar } from '../../organisms';
import { StoryRow } from '../../organisms';
import { Post } from '../../organisms';
import { PostComposer } from '../../organisms';
import { NotificationPanel } from '../../organisms';
import { EmptyState } from '../../cross-cutting';
import { Spinner } from '../../atoms';

interface FeedPageProps {
  stories?: Story[];
  posts?: PostData[];
  user?: User;
  onCreatePost?: (content: string) => void;
  onLikePost?: (postId: string) => void;
  onCommentPost?: (postId: string) => void;
  onStoryClick?: (storyId: string) => void;
  isLoading?: boolean;
}

interface Story {
  id: string;
  user: User;
  hasStory: boolean;
  viewed?: boolean;
}

interface PostData {
  id: string;
  author: PostAuthor;
  content?: string;
  images?: { url: string; alt?: string }[];
  createdAt?: Date | string | number;
  likeCount?: number;
  commentCount?: number;
  isLiked?: boolean;
}

interface PostAuthor {
  id: string;
  name: string;
  avatar?: string;
}

interface User {
  id: string;
  name: string;
  avatar?: string;
  role?: string;
}

export const FeedPage: React.FC<FeedPageProps> = ({
  stories = [],
  posts = [],
  user,
  onCreatePost,
  onLikePost,
  onCommentPost,
  onStoryClick,
  isLoading = false,
}) => {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-surface-base)]">
      <AppHeader notificationCount={3} onNotificationClick={() => {}} />

      <main className="flex-1 pb-20 lg:pb-6">
        <div className="mx-auto flex max-w-3xl gap-6 px-4 py-4">
          <div className="flex-1 space-y-4">
            {stories.length > 0 && (
              <StoryRow
                stories={stories.map((s) => ({
                  id: s.id,
                  name: s.user.name,
                  avatar: s.user.avatar,
                  isViewed: s.viewed,
                }))}
                onStoryClick={onStoryClick}
              />
            )}

            {onCreatePost && (
              <PostComposer
                user={user}
                onSubmit={onCreatePost}
                placeholder="무슨 생각을 하고 있나요?"
              />
            )}

            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <Spinner size="md" />
              </div>
            ) : posts.length > 0 ? (
              posts.map((post) => (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  images={post.images}
                  createdAt={post.createdAt}
                  likeCount={post.likeCount}
                  commentCount={post.commentCount}
                  isLiked={post.isLiked}
                  onLike={() => onLikePost?.(post.id)}
                  onComment={() => onCommentPost?.(post.id)}
                />
              ))
            ) : (
              <EmptyState
                variant="posts"
                action={{ label: '첫 번째 게시물 작성', onClick: () => {} }}
              />
            )}
          </div>

          <aside className="hidden lg:block">
            <NotificationPanel isOpen={true} notifications={[]} />
          </aside>
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
};

export type { FeedPageProps };
