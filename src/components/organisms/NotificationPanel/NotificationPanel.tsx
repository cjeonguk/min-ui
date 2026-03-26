import * as React from 'react';
import { X } from 'lucide-react';
import { IconButton } from '../../atoms/IconButton';
import { NotificationItem } from '../../molecules/NotificationItem';

export interface Notification {
  id: string;
  title: string;
  description?: string;
  time?: Date | string | number;
  isRead?: boolean;
}

export interface NotificationPanelProps {
  isOpen?: boolean;
  onClose?: () => void;
  notifications?: Notification[];
  onNotificationClick?: (id: string) => void;
  onMarkAllAsRead?: () => void;
  className?: string;
}

const NotificationPanel = React.forwardRef<
  HTMLDivElement,
  NotificationPanelProps
>(
  (
    {
      isOpen = true,
      onClose,
      notifications = [],
      onNotificationClick,
      onMarkAllAsRead,
      className,
    },
    ref
  ) => {
    if (!isOpen) return null;

    return (
      <>
        <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />
        <aside
          ref={ref}
          className={`fixed right-0 top-0 z-50 flex h-full w-80 flex-col border-l border-[var(--color-border-default)] bg-[var(--color-surface-raised)] shadow-lg ${className ?? ''}`}
        >
          <div className="flex h-14 items-center justify-between border-b border-[var(--color-border-default)] px-4">
            <h2 className="font-semibold text-[var(--color-text-primary)]">
              알림
            </h2>
            <div className="flex items-center gap-2">
              {onMarkAllAsRead && (
                <button
                  onClick={onMarkAllAsRead}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                >
                  모두 읽기
                </button>
              )}
              <IconButton
                icon={X}
                aria-label="닫기"
                variant="ghost"
                size="sm"
                onClick={onClose}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-[var(--color-text-tertiary)]">
                <p>알림이 없습니다</p>
              </div>
            ) : (
              <div className="divide-y divide-[var(--color-border-default)]">
                {notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    title={notification.title}
                    description={notification.description}
                    time={notification.time}
                    isRead={notification.isRead}
                    onClick={() => onNotificationClick?.(notification.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </aside>
      </>
    );
  }
);
NotificationPanel.displayName = 'NotificationPanel';

export { NotificationPanel };
