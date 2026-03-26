import * as React from 'react';
import { ChatWindow } from '../../organisms';
import { IconButton } from '../../atoms';
import { ArrowLeft, MoreVertical, Phone, Video } from 'lucide-react';

interface ChatRoomPageProps {
  room: ChatRoomData;
  messages?: Message[];
  currentUser?: CurrentUser;
  onBack?: () => void;
  onSendMessage?: (content: string) => void;
  onCall?: () => void;
  onVideoCall?: () => void;
  onMoreClick?: () => void;
}

interface ChatRoomData {
  id: string;
  name: string;
  avatar?: string;
  isOnline?: boolean;
  lastSeen?: Date | string | number;
}

interface Message {
  id: string;
  name: string;
  avatar?: string;
  content?: string;
  image?: string;
  time?: Date | string | number;
  isOwn?: boolean;
}

interface CurrentUser {
  name: string;
  avatar?: string;
}

export const ChatRoomPage: React.FC<ChatRoomPageProps> = ({
  room,
  messages = [],
  currentUser,
  onBack,
  onSendMessage,
  onCall,
  onVideoCall,
  onMoreClick,
}) => {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-surface-base)]">
      <div className="sticky top-0 z-10 border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <IconButton
              icon={ArrowLeft}
              aria-label="뒤로"
              variant="ghost"
              size="md"
              onClick={onBack}
            />
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-[var(--color-primary-100)]" />
                {room.isOnline && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                )}
              </div>
              <div>
                <p className="font-medium text-[var(--color-text-primary)]">
                  {room.name}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  {room.isOnline ? '온라인' : '오프라인'}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <IconButton
              icon={Phone}
              aria-label="통화"
              variant="ghost"
              size="md"
              onClick={onCall}
            />
            <IconButton
              icon={Video}
              aria-label="영상통화"
              variant="ghost"
              size="md"
              onClick={onVideoCall}
            />
            <IconButton
              icon={MoreVertical}
              aria-label="더보기"
              variant="ghost"
              size="md"
              onClick={onMoreClick}
            />
          </div>
        </div>
      </div>

      <div className="flex-1">
        <ChatWindow
          recipient={{
            name: room.name,
            avatar: room.avatar,
            isOnline: room.isOnline,
          }}
          messages={messages}
          currentUser={currentUser}
          onSend={onSendMessage}
          onBack={onBack}
        />
      </div>
    </div>
  );
};

export type { ChatRoomPageProps };
