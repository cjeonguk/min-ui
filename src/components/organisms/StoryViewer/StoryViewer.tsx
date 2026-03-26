import * as React from 'react';
import { X } from 'lucide-react';
import { IconButton } from '../../atoms/IconButton';
import { StoryThumbnail } from '../../molecules/StoryThumbnail';
import type { Story } from '../StoryRow/StoryRow';
import type { AvatarProps } from '../../atoms/Avatar';

export interface StoryViewerProps {
  stories?: Story[];
  initialIndex?: number;
  onClose?: () => void;
  onStoryEnd?: () => void;
  className?: string;
}

const StoryViewer = React.forwardRef<HTMLDivElement, StoryViewerProps>(
  ({ stories = [], initialIndex = 0, onClose, onStoryEnd, className }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (currentIndex < stories.length - 1) {
              setCurrentIndex((prev) => prev + 1);
              return 0;
            } else {
              onStoryEnd?.();
              onClose?.();
              return 0;
            }
          }
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(timer);
    }, [currentIndex, stories.length, onClose, onStoryEnd]);

    const currentStory = stories[currentIndex];

    if (!currentStory) return null;

    return (
      <div
        ref={ref}
        className={`fixed inset-0 z-50 flex bg-black ${className ?? ''}`}
      >
        <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-3 p-4">
          <IconButton
            icon={X}
            aria-label="닫기"
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-white/20"
          />
          <div className="flex-1">
            <div className="h-1 w-full rounded-full bg-white/30">
              <div
                className="h-full rounded-full bg-white transition-all duration-50"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <StoryThumbnail
            avatar={
              currentStory.avatar
                ? ({ src: currentStory.avatar } as AvatarProps)
                : undefined
            }
            name={currentStory.name}
            className="h-[70vh] w-auto"
          />
        </div>

        <div className="absolute bottom-8 inset-x-0 flex justify-center gap-4">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-white'
                  : index < currentIndex
                    ? 'bg-white/50'
                    : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }
);
StoryViewer.displayName = 'StoryViewer';

export { StoryViewer };
