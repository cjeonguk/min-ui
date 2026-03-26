import * as React from 'react';
import { Settings, Calendar, MapPin } from 'lucide-react';
import { Avatar } from '../../atoms/Avatar';
import { Button } from '../../atoms/Button';
import { IconButton } from '../../atoms/IconButton';
import { Tag } from '../../atoms/Tag';
import { Divider } from '../../atoms/Divider';

export interface ProfileHeaderProps {
  name: string;
  email?: string;
  avatar?: string;
  bio?: string;
  department?: string;
  location?: string;
  isOwn?: boolean;
  isFollowing?: boolean;
  followerCount?: number;
  followingCount?: number;
  onSettings?: () => void;
  onEdit?: () => void;
  onFollow?: () => void;
  onUnfollow?: () => void;
  className?: string;
}

const ProfileHeader = React.forwardRef<HTMLDivElement, ProfileHeaderProps>(
  (
    {
      name,
      email,
      avatar,
      bio,
      department,
      location,
      isOwn = false,
      isFollowing = false,
      followerCount = 0,
      followingCount = 0,
      onSettings,
      onEdit,
      onFollow,
      onUnfollow,
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
              src={avatar}
              fallback={name}
              size="xl"
              className="border-4 border-[var(--color-surface-raised)]"
            />
            <div className="flex gap-2">
              {isOwn ? (
                <Button variant="secondary" size="sm" onClick={onEdit}>
                  프로필 편집
                </Button>
              ) : (
                <Button
                  variant={isFollowing ? 'secondary' : 'primary'}
                  size="sm"
                  onClick={isFollowing ? onUnfollow : onFollow}
                >
                  {isFollowing ? '팔로잉' : '팔로우'}
                </Button>
              )}
              <IconButton
                icon={Settings}
                aria-label="설정"
                variant="secondary"
                size="md"
                onClick={onSettings}
              />
            </div>
          </div>

          <div className="mb-4">
            <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
              {name}
            </h1>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {email}
            </p>
          </div>

          {bio && (
            <p className="text-sm text-[var(--color-text-primary)] mb-4">
              {bio}
            </p>
          )}

          <div className="flex flex-wrap gap-4 mb-4 text-sm text-[var(--color-text-secondary)]">
            {department && (
              <div className="flex items-center gap-1">
                <Tag variant="outline" size="sm">
                  {department}
                </Tag>
              </div>
            )}
            {location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>2024년 3월 가입</span>
            </div>
          </div>

          <Divider />

          <div className="flex gap-8 py-3">
            <button className="text-center">
              <p className="text-lg font-bold text-[var(--color-text-primary)]">
                {followerCount}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                팔로워
              </p>
            </button>
            <button className="text-center">
              <p className="text-lg font-bold text-[var(--color-text-primary)]">
                {followingCount}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                팔로잉
              </p>
            </button>
          </div>
        </div>
      </div>
    );
  }
);
ProfileHeader.displayName = 'ProfileHeader';

export { ProfileHeader };
