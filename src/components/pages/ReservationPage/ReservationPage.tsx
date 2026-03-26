import * as React from 'react';
import { ReservationGrid } from '../../organisms';
import { EmptyState } from '../../cross-cutting';
import { Button } from '../../atoms';
import { Calendar } from 'lucide-react';

interface ReservationPageProps {
  facilities?: Facility[];
  selectedFacility?: string;
  slots?: ReservationSlot[];
  myReservations?: Reservation[];
  onSelectFacility?: (facilityId: string) => void;
  onReserve?: (slotId: string) => void;
  onCancelReservation?: (reservationId: string) => void;
}

interface Facility {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  available?: boolean;
}

interface ReservationSlot {
  id: string;
  time: string;
  status: 'available' | 'booked' | 'mine';
  reservedBy?: string;
}

interface Reservation {
  id: string;
  facilityId: string;
  facilityName: string;
  date: Date | string | number;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export const ReservationPage: React.FC<ReservationPageProps> = ({
  facilities = [],
  selectedFacility,
  slots = [],
  myReservations = [],
  onSelectFacility,
  onReserve,
  onCancelReservation,
}) => {
  const [activeTab, setActiveTab] = React.useState<'reserve' | 'my'>('reserve');

  return (
    <div className="min-h-screen bg-[var(--color-surface-base)]">
      <header className="sticky top-0 z-10 border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)] px-4 py-3">
        <h1 className="text-lg font-semibold text-[var(--color-text-primary)]">
          시설 예약
        </h1>
      </header>

      <div className="border-b border-[var(--color-border-default)]">
        <nav className="flex px-4">
          <button
            onClick={() => setActiveTab('reserve')}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'reserve'
                ? 'border-[var(--color-action-default)] text-[var(--color-action-default)]'
                : 'border-transparent text-[var(--color-text-secondary)]'
            }`}
          >
            <Calendar className="h-4 w-4" />
            예약하기
          </button>
          <button
            onClick={() => setActiveTab('my')}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'my'
                ? 'border-[var(--color-action-default)] text-[var(--color-action-default)]'
                : 'border-transparent text-[var(--color-text-secondary)]'
            }`}
          >
            내 예약
            {myReservations.length > 0 && (
              <span className="ml-1 rounded-full bg-[var(--color-secondary-500)] px-2 py-0.5 text-xs text-white">
                {myReservations.length}
              </span>
            )}
          </button>
        </nav>
      </div>

      <main className="px-4 py-4">
        {activeTab === 'reserve' ? (
          <>
            <div className="mb-4 space-y-2">
              <h2 className="text-sm font-semibold text-[var(--color-text-secondary)]">
                시설 선택
              </h2>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {facilities.map((facility) => (
                  <button
                    key={facility.id}
                    onClick={() => onSelectFacility?.(facility.id)}
                    className={`shrink-0 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                      selectedFacility === facility.id
                        ? 'border-[var(--color-action-default)] bg-[var(--color-action-default)] text-white'
                        : 'border-[var(--color-border-default)] bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-subtle)]'
                    }`}
                  >
                    {facility.name}
                  </button>
                ))}
              </div>
            </div>

            {selectedFacility && slots.length > 0 ? (
              <ReservationGrid slots={slots} onSlotBook={onReserve} />
            ) : selectedFacility ? (
              <EmptyState
                variant="default"
                title="예약 가능한 시간이 없습니다"
                description="다른 날짜를 선택해주세요."
              />
            ) : (
              <EmptyState
                variant="default"
                title="시설을 선택해주세요"
                description="위에서 예약할 시설을 선택하세요."
              />
            )}
          </>
        ) : (
          <>
            {myReservations.length > 0 ? (
              <div className="space-y-3">
                {myReservations.map((reservation) => (
                  <div
                    key={reservation.id}
                    className="flex items-center justify-between rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] p-4"
                  >
                    <div>
                      <p className="font-medium text-[var(--color-text-primary)]">
                        {reservation.facilityName}
                      </p>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {new Date(reservation.date).toLocaleDateString()}{' '}
                        {reservation.time}
                      </p>
                      <p className="mt-1 text-xs">
                        <span
                          className={`rounded-full px-2 py-0.5 ${
                            reservation.status === 'confirmed'
                              ? 'bg-[var(--color-status-success-bg)] text-[var(--color-status-success-text)]'
                              : reservation.status === 'pending'
                                ? 'bg-[var(--color-status-warning-bg)] text-[var(--color-status-warning-text)]'
                                : 'bg-[var(--color-status-error-bg)] text-[var(--color-status-error-text)]'
                          }`}
                        >
                          {reservation.status === 'confirmed'
                            ? '확정'
                            : reservation.status === 'pending'
                              ? '대기중'
                              : '취소'}
                        </span>
                      </p>
                    </div>
                    {reservation.status !== 'cancelled' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onCancelReservation?.(reservation.id)}
                      >
                        취소
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                variant="inbox"
                title="예약 내역이 없습니다"
                description="시설을 예약해보세요!"
              />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export type { ReservationPageProps };
