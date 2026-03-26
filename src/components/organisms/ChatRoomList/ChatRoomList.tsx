import * as React from 'react';
import { Search } from 'lucide-react';
import { ChatRoomItem } from '../../molecules/ChatRoomItem';
import { SearchBar } from '../../molecules/SearchBar';
import { Skeleton } from '../../atoms/Skeleton';

export interface ChatRoom {
  id: string;
  name: string;
  avatar?: string;
  preview?: string;
  time?: Date | string | number;
  unreadCount?: number;
  isOnline?: boolean;
}

export interface ChatRoomListProps {
  rooms?: ChatRoom[];
  onRoomClick?: (id: string) => void;
  onSearch?: (query: string) => void;
  isLoading?: boolean;
  className?: string;
}

const ChatRoomList = React.forwardRef<HTMLDivElement, ChatRoomListProps>(
  (
    { rooms = [], onRoomClick, onSearch, isLoading = false, className },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] ${className ?? ''}`}
      >
        <div className="border-b border-[var(--color-border-default)] p-4">
          <SearchBar placeholder="채팅방 검색..." onChange={onSearch} />
        </div>

        <div className="flex-1 overflow-y-auto">
          {isLoading ? (
            <div className="space-y-2 p-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton
                    variant="avatar"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-40" />
                  </div>
                </div>
              ))}
            </div>
          ) : rooms.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-[var(--color-text-tertiary)]">
              <Search className="mb-2 h-8 w-8" />
              <p>검색 결과가 없습니다</p>
            </div>
          ) : (
            <div className="divide-y divide-[var(--color-border-default)]">
              {rooms.map((room) => (
                <ChatRoomItem
                  key={room.id}
                  avatar={room.avatar ? { src: room.avatar } : undefined}
                  name={room.name}
                  preview={room.preview}
                  time={room.time}
                  unreadCount={room.unreadCount}
                  isOnline={room.isOnline}
                  onClick={() => onRoomClick?.(room.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);
ChatRoomList.displayName = 'ChatRoomList';

export { ChatRoomList };
