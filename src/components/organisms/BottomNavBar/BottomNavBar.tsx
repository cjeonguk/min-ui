import * as React from 'react';
import { Home, Search, PlusSquare, MessageCircle, User } from 'lucide-react';
import { IconButton } from '../../atoms/IconButton';
import { Badge } from '../../atoms/Badge';

export interface NavItem {
  icon: typeof Home;
  label: string;
  href?: string;
  badge?: number;
  isActive?: boolean;
  onClick?: () => void;
}

export interface BottomNavBarProps {
  items?: NavItem[];
  onHomeClick?: () => void;
  onSearchClick?: () => void;
  onCreateClick?: () => void;
  onChatClick?: () => void;
  onProfileClick?: () => void;
  className?: string;
}

const defaultItems: NavItem[] = [
  { icon: Home, label: '홈' },
  { icon: Search, label: '검색' },
  { icon: PlusSquare, label: '작성' },
  { icon: MessageCircle, label: '채팅' },
  { icon: User, label: '프로필' },
];

const BottomNavBar = React.forwardRef<HTMLDivElement, BottomNavBarProps>(
  (
    {
      items = defaultItems,
      onHomeClick,
      onSearchClick,
      onCreateClick,
      onChatClick,
      onProfileClick,
      className,
    },
    ref
  ) => {
    const handlers = [
      onHomeClick,
      onSearchClick,
      onCreateClick,
      onChatClick,
      onProfileClick,
    ];

    return (
      <nav
        ref={ref}
        className={`fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-[var(--color-border-default)] bg-[var(--color-surface-raised)] px-4 ${className ?? ''}`}
      >
        {items.map((item, index) => (
          <IconButton
            key={item.label}
            icon={item.icon}
            aria-label={item.label}
            variant="ghost"
            size="md"
            onClick={handlers[index]}
            className={`relative ${item.isActive ? 'text-[var(--color-primary-600)]' : ''}`}
          >
            {item.badge !== undefined && item.badge > 0 && (
              <Badge
                variant="secondary"
                size="sm"
                count={item.badge}
                className="absolute -top-1 -right-1"
              />
            )}
          </IconButton>
        ))}
      </nav>
    );
  }
);
BottomNavBar.displayName = 'BottomNavBar';

export { BottomNavBar };
