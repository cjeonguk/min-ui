import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IconButton } from '../../atoms/IconButton';
import { TimeSlotButton } from '../../molecules/TimeSlotButton';

export interface ReservationSlot {
  id: string;
  time: string;
  status: 'available' | 'booked' | 'mine';
  reservedBy?: string;
}

export interface ReservationGridProps {
  date?: Date;
  slots?: ReservationSlot[];
  onSlotBook?: (id: string) => void;
  onSlotCancel?: (id: string) => void;
  onPrevDay?: () => void;
  onNextDay?: () => void;
  className?: string;
}

const ReservationGrid = React.forwardRef<HTMLDivElement, ReservationGridProps>(
  (
    {
      date = new Date(),
      slots = [],
      onSlotBook,
      onSlotCancel,
      onPrevDay,
      onNextDay,
      className,
    },
    ref
  ) => {
    const formattedDate = date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });

    return (
      <div
        ref={ref}
        className={`rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] ${className ?? ''}`}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border-default)] p-4">
          <IconButton
            icon={ChevronLeft}
            aria-label="이전 날"
            variant="ghost"
            size="sm"
            onClick={onPrevDay}
          />
          <h3 className="font-semibold text-[var(--color-text-primary)]">
            {formattedDate}
          </h3>
          <IconButton
            icon={ChevronRight}
            aria-label="다음 날"
            variant="ghost"
            size="sm"
            onClick={onNextDay}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3 md:grid-cols-4">
          {slots.map((slot) => (
            <TimeSlotButton
              key={slot.id}
              time={slot.time}
              status={slot.status}
              onBook={() => onSlotBook?.(slot.id)}
              onCancel={() => onSlotCancel?.(slot.id)}
            />
          ))}
        </div>

        {slots.length === 0 && (
          <div className="p-8 text-center text-[var(--color-text-tertiary)]">
            예약 가능한 시간이 없습니다
          </div>
        )}
      </div>
    );
  }
);
ReservationGrid.displayName = 'ReservationGrid';

export { ReservationGrid };
