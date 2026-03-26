import * as React from 'react';
import {
  X,
  Home,
  Search,
  Users,
  MessageCircle,
  Calendar,
  Settings,
  HelpCircle,
} from 'lucide-react';
import { IconButton } from '../../atoms/IconButton';
import { Avatar } from '../../atoms/Avatar';
import { Divider } from '../../atoms/Divider';

export interface NavItem {
  icon: typeof Home;
  label: string;
  href?: string;
  badge?: number;
  isActive?: boolean;
  onClick?: () => void;
}

export interface SideNavBarProps {
  isOpen?: boolean;
  onClose?: () => void;
  user?: {
    name: string;
    avatar?: string;
  };
  navItems?: NavItem[];
  bottomItems?: NavItem[];
  onProfileClick?: () => void;
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { icon: Home, label: '홈' },
  { icon: Search, label: '검색' },
  { icon: Users, label: '그룹' },
  { icon: MessageCircle, label: '채팅' },
  { icon: Calendar, label: '일정' },
];

const defaultBottomItems: NavItem[] = [
  { icon: Settings, label: '설정' },
  { icon: HelpCircle, label: '도움말' },
];

const SideNavBar = React.forwardRef<HTMLDivElement, SideNavBarProps>(
  (
    {
      isOpen = true,
      onClose,
      user,
      navItems = defaultNavItems,
      bottomItems = defaultBottomItems,
      onProfileClick,
      className,
    },
    ref
  ) => {
    return (
      <>
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={onClose}
          />
        )}
        <aside
          ref={ref}
          className={`fixed left-0 top-0 z-50 flex h-full w-64 flex-col border-r border-[var(--color-border-default)] bg-[var(--color-surface-raised)] transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } ${className ?? ''}`}
        >
          <div className="flex h-16 items-center justify-between px-4">
            <span className="text-lg font-bold text-[var(--color-primary-600)]">
              MinUI
            </span>
            <IconButton
              icon={X}
              aria-label="닫기"
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="md:hidden"
            />
          </div>

          {user && (
            <button
              onClick={onProfileClick}
              className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--color-surface-subtle)]"
            >
              <Avatar src={user.avatar} fallback={user.name} size="lg" />
              <div className="flex flex-col">
                <span className="font-medium text-[var(--color-text-primary)]">
                  {user.name}
                </span>
                <span className="text-sm text-[var(--color-text-secondary)]">
                  프로필 보기
                </span>
              </div>
            </button>
          )}

          <Divider />

          <nav className="flex-1 overflow-y-auto px-2 py-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                  item.isActive
                    ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-600)]'
                    : 'text-[var(--color-text-primary)] hover:bg-[var(--color-surface-subtle)]'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="flex-1 font-medium">{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="rounded-full bg-[var(--color-notify-badge-bg)] px-2 py-0.5 text-xs font-medium text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          <Divider />

          <nav className="px-2 py-2">
            {bottomItems.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-subtle)] hover:text-[var(--color-text-primary)]"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>
      </>
    );
  }
);
SideNavBar.displayName = 'SideNavBar';

export { SideNavBar };
