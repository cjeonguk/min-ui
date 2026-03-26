import * as React from 'react';
import { GroupHeader } from '../../organisms';
import { PostComposer } from '../../organisms';
import { Post } from '../../organisms';
import { EmptyState } from '../../cross-cutting';

interface GroupPageProps {
  group: GroupData;
  currentUser?: User;
  posts?: PostData[];
  onJoin?: () => void;
  onLeave?: () => void;
  onCreatePost?: (content: string) => void;
  onLikePost?: (postId: string) => void;
  isMember?: boolean;
  isLoading?: boolean;
}

interface GroupData {
  id: string;
  name: string;
  description?: string;
  image?: string;
  coverImage?: string;
  category?: string;
  memberCount?: number;
  isPrivate?: boolean;
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
}

export const GroupPage: React.FC<GroupPageProps> = ({
  group,
  currentUser,
  posts = [],
  onJoin,
  onLeave,
  onCreatePost,
  onLikePost,
  isMember = false,
  isLoading = false,
}) => {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-surface-base)]">
      <GroupHeader
        name={group.name}
        description={group.description}
        image={group.image}
        category={group.category}
        memberCount={group.memberCount}
        isPrivate={group.isPrivate}
        isMember={isMember}
        onJoin={onJoin}
        onLeave={onLeave}
      />

      <main className="flex-1 px-4 py-4">
        <div className="mx-auto max-w-2xl space-y-4">
          {isMember && onCreatePost && (
            <PostComposer
              user={currentUser}
              onSubmit={onCreatePost}
              placeholder={`${group.name} 그룹에 글을 작성하세요...`}
            />
          )}

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
                onLike={() => onLikePost?.(post.id)}
              />
            ))
          ) : (
            <EmptyState
              variant="posts"
              title="아직 게시물이 없습니다"
              description={
                isMember
                  ? '첫 번째 게시물을 작성해보세요!'
                  : '그룹에 가입하여 게시물을 확인하세요.'
              }
            />
          )}
        </div>
      </main>
    </div>
  );
};

export type { GroupPageProps };
