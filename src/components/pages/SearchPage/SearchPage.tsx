import * as React from 'react';
import { SearchBar } from '../../molecules';
import { GroupList } from '../../organisms';
import { EmptyState } from '../../cross-cutting';
import { Avatar } from '../../atoms';

interface SearchPageProps {
  initialQuery?: string;
  groups?: GroupData[];
  users?: UserData[];
  onSearch?: (query: string) => void;
  onGroupClick?: (groupId: string) => void;
  onUserClick?: (userId: string) => void;
  isLoading?: boolean;
}

interface GroupData {
  id: string;
  name: string;
  description?: string;
  image?: string;
  category?: string;
  memberCount?: number;
}

interface UserData {
  id: string;
  name: string;
  avatar?: string;
  role?: string;
}

export const SearchPage: React.FC<SearchPageProps> = ({
  initialQuery = '',
  groups = [],
  users = [],
  onSearch,
  onGroupClick,
  onUserClick,
}) => {
  const [query, setQuery] = React.useState(initialQuery);
  const [activeTab, setActiveTab] = React.useState<'all' | 'groups' | 'users'>(
    'all'
  );

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch?.(value);
  };

  const filteredGroups = query
    ? groups.filter((g) => g.name.toLowerCase().includes(query.toLowerCase()))
    : groups;

  const filteredUsers = query
    ? users.filter((u) => u.name.toLowerCase().includes(query.toLowerCase()))
    : users;

  const showGroups = activeTab === 'all' || activeTab === 'groups';
  const showUsers = activeTab === 'all' || activeTab === 'users';

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-surface-base)]">
      <header className="sticky top-0 z-10 border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)] px-4 py-3">
        <SearchBar
          value={query}
          onChange={handleSearch}
          placeholder="검색..."
        />

        <div className="mt-3 flex gap-2">
          {(['all', 'groups', 'users'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-[var(--color-action-default)] text-white'
                  : 'bg-[var(--color-surface-subtle)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border-default)]'
              }`}
            >
              {tab === 'all' ? '전체' : tab === 'groups' ? '그룹' : '사용자'}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 px-4 py-4">
        {!query ? (
          <EmptyState
            variant="search"
            title="검색어를 입력하세요"
            description="그룹, 사용자, 게시물을 검색할 수 있습니다."
          />
        ) : (
          <>
            {showGroups && filteredGroups.length > 0 && (
              <div className="mb-6 space-y-3">
                <h2 className="text-sm font-semibold text-[var(--color-text-secondary)]">
                  그룹
                </h2>
                <GroupList
                  groups={filteredGroups}
                  onGroupClick={onGroupClick}
                />
              </div>
            )}

            {showUsers && filteredUsers.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-[var(--color-text-secondary)]">
                  사용자
                </h2>
                <div className="space-y-2">
                  {filteredUsers.map((user) => (
                    <button
                      key={user.id}
                      onClick={() => onUserClick?.(user.id)}
                      className="flex w-full items-center gap-3 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] p-3 text-left transition-colors hover:bg-[var(--color-surface-subtle)]"
                    >
                      <Avatar
                        src={user.avatar}
                        fallback={user.name}
                        size="md"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-[var(--color-text-primary)]">
                          {user.name}
                        </p>
                        {user.role && (
                          <p className="text-sm text-[var(--color-text-secondary)]">
                            {user.role}
                          </p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filteredGroups.length === 0 && filteredUsers.length === 0 && (
              <EmptyState
                variant="search"
                title="검색 결과 없음"
                description={`"${query}"에 대한 검색 결과가 없습니다.`}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export type { SearchPageProps };
