import * as React from 'react';
import { Send, MoreVertical, Phone, Video, X } from 'lucide-react';
import { Avatar } from '../../atoms/Avatar';
import { IconButton } from '../../atoms/IconButton';
import { Textarea } from '../../atoms/Textarea';
import { MessageBubble } from '../../molecules/MessageBubble';
import type { AvatarProps } from '../../atoms/Avatar';

export interface Message {
  id: string;
  name: string;
  avatar?: string;
  content?: string;
  image?: string;
  time?: Date | string | number;
  isOwn?: boolean;
}

export interface ChatWindowProps {
  recipient?: {
    name: string;
    avatar?: string;
    isOnline?: boolean;
  };
  messages?: Message[];
  currentUser?: {
    name: string;
    avatar?: string;
  };
  onSend?: (content: string) => void;
  onBack?: () => void;
  onCall?: () => void;
  onVideoCall?: () => void;
  onMoreClick?: () => void;
  className?: string;
}

const ChatWindow = React.forwardRef<HTMLDivElement, ChatWindowProps>(
  (
    {
      recipient,
      messages = [],
      currentUser,
      onSend,
      onBack,
      onCall,
      onVideoCall,
      onMoreClick,
      className,
    },
    ref
  ) => {
    const [content, setContent] = React.useState('');
    const messagesEndRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = () => {
      if (content.trim()) {
        onSend?.(content);
        setContent('');
      }
    };

    return (
      <div
        ref={ref}
        className={`flex flex-col rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] ${className ?? ''}`}
      >
        <div className="flex items-center gap-3 border-b border-[var(--color-border-default)] p-4">
          <IconButton
            icon={X}
            aria-label="닫기"
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="md:hidden"
          />
          <div className="relative">
            <Avatar
              src={recipient?.avatar}
              fallback={recipient?.name || ''}
              size="md"
            />
            {recipient?.isOnline && (
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[var(--color-surface-raised)] bg-green-500" />
            )}
          </div>
          <div className="flex-1">
            <p className="font-medium text-[var(--color-text-primary)]">
              {recipient?.name}
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              {recipient?.isOnline ? '온라인' : '오프라인'}
            </p>
          </div>
          <IconButton
            icon={Phone}
            aria-label="통화"
            variant="ghost"
            size="sm"
            onClick={onCall}
          />
          <IconButton
            icon={Video}
            aria-label="영상통화"
            variant="ghost"
            size="sm"
            onClick={onVideoCall}
          />
          <IconButton
            icon={MoreVertical}
            aria-label="더보기"
            variant="ghost"
            size="sm"
            onClick={onMoreClick}
          />
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                avatar={
                  message.avatar
                    ? ({ src: message.avatar } as AvatarProps)
                    : undefined
                }
                name={message.name}
                content={message.content}
                image={message.image}
                time={message.time}
                isOwn={message.isOwn}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {currentUser && (
          <div className="flex items-end gap-3 border-t border-[var(--color-border-default)] p-4">
            <Avatar
              src={currentUser.avatar}
              fallback={currentUser.name}
              size="sm"
            />
            <div className="flex-1">
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="메시지를 입력하세요..."
                className="min-h-[40px] resize-none py-2"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
            </div>
            <IconButton
              icon={Send}
              aria-label="전송"
              variant="primary"
              size="sm"
              onClick={handleSend}
              disabled={!content.trim()}
            />
          </div>
        )}
      </div>
    );
  }
);
ChatWindow.displayName = 'ChatWindow';

export { ChatWindow };
