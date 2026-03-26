import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IconButton } from '../../atoms/IconButton';
import { StoryThumbnail } from '../../molecules/StoryThumbnail';
import type { AvatarProps } from '../../atoms/Avatar';

export interface Story {
  id: string;
  name: string;
  avatar?: string;
  isViewed?: boolean;
}

export interface StoryRowProps {
  stories?: Story[];
  onStoryClick?: (id: string) => void;
  onAddClick?: () => void;
  className?: string;
}

const StoryRow = React.forwardRef<HTMLDivElement, StoryRowProps>(
  ({ stories = [], onStoryClick, onAddClick, className }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
      if (scrollContainerRef.current) {
        const scrollAmount = 120;
        scrollContainerRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    };

    return (
      <div ref={ref} className={`relative ${className ?? ''}`}>
        <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center">
          <IconButton
            icon={ChevronLeft}
            aria-label="이전"
            variant="secondary"
            size="sm"
            onClick={() => scroll('left')}
            className="shadow-md"
          />
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto px-4 py-3 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <StoryThumbnail name="" isAddButton onClick={onAddClick} />
          {stories.map((story) => (
            <StoryThumbnail
              key={story.id}
              avatar={
                story.avatar
                  ? ({ src: story.avatar } as AvatarProps)
                  : undefined
              }
              name={story.name}
              isViewed={story.isViewed}
              onClick={() => onStoryClick?.(story.id)}
            />
          ))}
        </div>

        <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center">
          <IconButton
            icon={ChevronRight}
            aria-label="다음"
            variant="secondary"
            size="sm"
            onClick={() => scroll('right')}
            className="shadow-md"
          />
        </div>
      </div>
    );
  }
);
StoryRow.displayName = 'StoryRow';

export { StoryRow };
