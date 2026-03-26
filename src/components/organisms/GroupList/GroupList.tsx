import * as React from 'react';
import { Users } from 'lucide-react';
import { GroupCard } from '../../molecules/GroupCard';
import { SearchBar } from '../../molecules/SearchBar';
import { Skeleton } from '../../atoms/Skeleton';

export interface Group {
  id: string;
  name: string;
  image?: string;
  description?: string;
  category?: string;
  memberCount?: number;
  isPrivate?: boolean;
}

export interface GroupListProps {
  groups?: Group[];
  onGroupClick?: (id: string) => void;
  onSearch?: (query: string) => void;
  isLoading?: boolean;
  className?: string;
}

const GroupList = React.forwardRef<HTMLDivElement, GroupListProps>(
  (
    { groups = [], onGroupClick, onSearch, isLoading = false, className },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] ${className ?? ''}`}
      >
        <div className="border-b border-[var(--color-border-default)] p-4">
          <SearchBar placeholder="그룹 검색..." onChange={onSearch} />
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {isLoading ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-24 w-full rounded-xl" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              ))}
            </div>
          ) : groups.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-[var(--color-text-tertiary)]">
              <Users className="mb-2 h-8 w-8" />
              <p>검색 결과가 없습니다</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {groups.map((group) => (
                <GroupCard
                  key={group.id}
                  image={group.image ? { src: group.image } : undefined}
                  name={group.name}
                  description={group.description}
                  category={group.category}
                  memberCount={group.memberCount}
                  isPrivate={group.isPrivate}
                  onClick={() => onGroupClick?.(group.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);
GroupList.displayName = 'GroupList';

export { GroupList };
