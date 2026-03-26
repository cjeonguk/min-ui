import * as React from 'react';
import { ProfileHeader } from '../../organisms';
import { StoryRow } from '../../organisms';
import { Post } from '../../organisms';
import { EmptyState } from '../../cross-cutting';

interface ProfilePageProps {
  user: UserProfile;
  posts?: PostData[];
  stories?: StoryData[];
  isOwnProfile?: boolean;
  onEditProfile?: () => void;
  onFollow?: () => void;
  onUnfollow?: () => void;
  onStoryClick?: (storyId: string) => void;
  onPostClick?: (postId: string) => void;
  isLoading?: boolean;
}

interface UserProfile {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  bio?: string;
  department?: string;
  location?: string;
  followerCount?: number;
  followingCount?: number;
  isFollowing?: boolean;
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

interface StoryData {
  id: string;
  name: string;
  avatar?: string;
  hasStory?: boolean;
  isViewed?: boolean;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  user,
  posts = [],
  stories = [],
  isOwnProfile = false,
  onEditProfile,
  onFollow,
  onUnfollow,
  onStoryClick,
  onPostClick,
  isLoading = false,
}) => {
  return (
    <div className="min-h-screen bg-[var(--color-surface-base)]">
      <ProfileHeader
        name={user.name}
        email={user.email}
        avatar={user.avatar}
        bio={user.bio}
        department={user.department}
        location={user.location}
        followerCount={user.followerCount}
        followingCount={user.followingCount}
        isFollowing={user.isFollowing}
        isOwn={isOwnProfile}
        onEdit={onEditProfile}
        onFollow={onFollow}
        onUnfollow={onUnfollow}
      />

      {stories.length > 0 && (
        <div className="border-b border-[var(--color-border-default)]">
          <StoryRow
            stories={stories.map((s) => ({
              id: s.id,
              name: s.name,
              avatar: s.avatar,
              hasStory: s.hasStory,
              isViewed: s.isViewed,
            }))}
            onStoryClick={onStoryClick}
            className="px-4"
          />
        </div>
      )}

      <main className="px-4 py-4">
        <div className="mx-auto max-w-2xl space-y-4">
          {isLoading ? (
            <div className="py-8 text-center text-[var(--color-text-secondary)]">
              로딩 중...
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
                onAuthorClick={() => onPostClick?.(post.id)}
              />
            ))
          ) : (
            <EmptyState
              variant="posts"
              title="아직 게시물이 없습니다"
              description={
                isOwnProfile
                  ? '첫 번째 게시물을 작성해보세요!'
                  : `${user.name}님의 게시물이 없습니다.`
              }
            />
          )}
        </div>
      </main>
    </div>
  );
};

export type { ProfilePageProps };
