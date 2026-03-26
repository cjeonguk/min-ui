import * as React from 'react';
import { Bell, Search, Menu, User as UserIcon } from 'lucide-react';
import { IconButton } from '../../atoms/IconButton';
import { Avatar } from '../../atoms/Avatar';
import { Badge } from '../../atoms/Badge';
import { SearchBar } from '../../molecules/SearchBar';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../../molecules/DropdownMenu';

export interface AppHeaderProps {
  user?: {
    name: string;
    avatar?: string;
  };
  notificationCount?: number;
  onMenuClick?: () => void;
  onSearch?: (query: string) => void;
  onNotificationClick?: () => void;
  onProfileClick?: () => void;
  onLogout?: () => void;
  className?: string;
}

const AppHeader = React.forwardRef<HTMLDivElement, AppHeaderProps>(
  (
    {
      user,
      notificationCount,
      onMenuClick,
      onSearch,
      onNotificationClick,
      onProfileClick,
      onLogout,
      className,
    },
    ref
  ) => {
    return (
      <header
        ref={ref}
        className={`sticky top-0 z-50 flex h-16 items-center justify-between border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)] px-4 ${className ?? ''}`}
      >
        <div className="flex items-center gap-3">
          <IconButton
            icon={Menu}
            aria-label="메뉴"
            variant="ghost"
            size="md"
            onClick={onMenuClick}
          />
          <span className="text-lg font-bold text-[var(--color-primary-600)]">
            MinUI
          </span>
        </div>

        {onSearch && (
          <div className="hidden flex-1 px-4 md:block md:max-w-md">
            <SearchBar placeholder="검색..." onChange={onSearch} />
          </div>
        )}

        <div className="flex items-center gap-2">
          {onSearch && (
            <IconButton
              icon={Search}
              aria-label="검색"
              variant="ghost"
              size="md"
              className="md:hidden"
              onClick={() => {}}
            />
          )}

          {onNotificationClick && (
            <IconButton
              icon={Bell}
              aria-label="알림"
              variant="ghost"
              size="md"
              onClick={onNotificationClick}
              className="relative"
            >
              {notificationCount !== undefined && notificationCount > 0 && (
                <Badge
                  variant="secondary"
                  size="sm"
                  count={notificationCount}
                  className="absolute -top-1 -right-1"
                />
              )}
            </IconButton>
          )}

          {user ? (
            <DropdownMenu
              trigger={
                <button className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]">
                  <Avatar src={user.avatar} fallback={user.name} size="sm" />
                </button>
              }
            >
              <DropdownMenuItem onClick={onProfileClick}>
                프로필
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>설정</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="danger" onClick={onLogout}>
                로그아웃
              </DropdownMenuItem>
            </DropdownMenu>
          ) : (
            <IconButton
              icon={UserIcon}
              aria-label="로그인"
              variant="ghost"
              size="md"
            />
          )}
        </div>
      </header>
    );
  }
);
AppHeader.displayName = 'AppHeader';

export { AppHeader };
