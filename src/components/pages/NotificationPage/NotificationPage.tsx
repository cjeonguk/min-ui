import * as React from 'react';
import { IconButton } from '../../atoms';
import { ArrowLeft } from 'lucide-react';

interface NotificationPageProps {
  notifications?: Notification[];
  onNotificationClick?: (id: string) => void;
  onBack?: () => void;
  isLoading?: boolean;
}

interface Notification {
  id: string;
  title: string;
  description?: string;
  time?: Date | string | number;
  isRead?: boolean;
  type?: 'like' | 'comment' | 'follow' | 'group' | 'system';
  avatar?: string;
}

export const NotificationPage: React.FC<NotificationPageProps> = ({
  notifications = [],
  onNotificationClick,
  onBack,
  isLoading = false,
}) => {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-surface-base)]">
      <div className="sticky top-0 z-10 border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
        <div className="flex h-14 items-center gap-2 px-4">
          <IconButton
            icon={ArrowLeft}
            aria-label="뒤로"
            variant="ghost"
            size="md"
            onClick={onBack}
          />
          <h1 className="text-lg font-semibold text-[var(--color-text-primary)]">
            알림
          </h1>
        </div>
      </div>

      <main className="flex-1">
        {isLoading ? (
          <div className="flex items-center justify-center py-12 text-[var(--color-text-secondary)]">
            로딩 중...
          </div>
        ) : notifications.length > 0 ? (
          <div className="divide-y divide-[var(--color-border-default)]">
            {notifications.map((notification) => (
              <button
                key={notification.id}
                onClick={() => onNotificationClick?.(notification.id)}
                className={`flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-[var(--color-surface-subtle)] ${
                  !notification.isRead ? 'bg-[var(--color-primary-50)]' : ''
                }`}
              >
                {notification.avatar && (
                  <div className="h-10 w-10 rounded-full bg-[var(--color-primary-100)]" />
                )}
                <div className="flex-1">
                  <p className="text-sm text-[var(--color-text-primary)]">
                    {notification.title}
                  </p>
                  {notification.description && (
                    <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                      {notification.description}
                    </p>
                  )}
                  {notification.time && (
                    <p className="mt-1 text-xs text-[var(--color-text-tertiary)]">
                      {new Date(notification.time).toLocaleDateString()}
                    </p>
                  )}
                </div>
                {!notification.isRead && (
                  <div className="mt-2 h-2 w-2 rounded-full bg-[var(--color-primary-500)]" />
                )}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-[var(--color-text-tertiary)]">
            <p>알림이 없습니다</p>
          </div>
        )}
      </main>
    </div>
  );
};

export type { NotificationPageProps };
