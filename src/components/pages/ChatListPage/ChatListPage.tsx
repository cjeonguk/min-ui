import * as React from 'react';
import { ChatRoomList } from '../../organisms';
import { AppHeader } from '../../organisms';
import { EmptyState } from '../../cross-cutting';

interface ChatListPageProps {
  rooms?: ChatRoom[];
  onRoomClick?: (roomId: string) => void;
  isLoading?: boolean;
}

interface ChatRoom {
  id: string;
  name: string;
  avatar?: string;
  preview?: string;
  time?: Date | string | number;
  unreadCount?: number;
  isOnline?: boolean;
}

export const ChatListPage: React.FC<ChatListPageProps> = ({
  rooms = [],
  onRoomClick,
  isLoading = false,
}) => {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-surface-base)]">
      <AppHeader onNotificationClick={() => {}} />

      <main className="flex-1">
        {isLoading ? (
          <div className="flex items-center justify-center py-12 text-[var(--color-text-secondary)]">
            로딩 중...
          </div>
        ) : rooms.length > 0 ? (
          <ChatRoomList rooms={rooms} onRoomClick={onRoomClick} />
        ) : (
          <EmptyState
            variant="messages"
            title="대화가 없습니다"
            description="새로운 대화를 시작해보세요!"
          />
        )}
      </main>
    </div>
  );
};

export type { ChatListPageProps };
