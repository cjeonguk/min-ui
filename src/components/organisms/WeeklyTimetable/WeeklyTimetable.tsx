import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IconButton } from '../../atoms/IconButton';
import { Skeleton } from '../../atoms/Skeleton';

export interface TimeSlot {
  time: string;
  course?: string;
  room?: string;
  professor?: string;
}

export interface DaySchedule {
  day: string;
  date: number;
  slots: TimeSlot[];
}

export interface WeeklyTimetableProps {
  weekStart?: Date;
  schedule?: DaySchedule[];
  currentDay?: number;
  onSlotClick?: (day: number, time: string) => void;
  isLoading?: boolean;
  className?: string;
}

const timeSlots = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
];

const WeeklyTimetable = React.forwardRef<HTMLDivElement, WeeklyTimetableProps>(
  (
    {
      weekStart = new Date(),
      schedule = [],
      currentDay = new Date().getDay(),
      onSlotClick,
      isLoading = false,
      className,
    },
    ref
  ) => {
    const weekDays = React.useMemo(() => {
      const days: DaySchedule[] = [];
      const start = new Date(weekStart);
      start.setDate(start.getDate() - start.getDay() + 1);

      for (let i = 0; i < 7; i++) {
        const date = new Date(start);
        date.setDate(start.getDate() + i);
        const daySchedule = schedule.find(
          (s) => new Date(s.date).toDateString() === date.toDateString()
        );
        days.push({
          day: ['일', '월', '화', '수', '목', '금', '토'][i],
          date: date.getDate(),
          slots: daySchedule?.slots || [],
        });
      }
      return days;
    }, [weekStart, schedule]);

    return (
      <div
        ref={ref}
        className={`overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] ${className ?? ''}`}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border-default)] p-4">
          <h2 className="font-semibold text-[var(--color-text-primary)]">
            시간표
          </h2>
          <div className="flex gap-2">
            <IconButton
              icon={ChevronLeft}
              aria-label="이전 주"
              variant="ghost"
              size="sm"
              onClick={() => {}}
            />
            <IconButton
              icon={ChevronRight}
              aria-label="다음 주"
              variant="ghost"
              size="sm"
              onClick={() => {}}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="w-16 border-b border-r border-[var(--color-border-default)] p-2" />
                {weekDays.map((day, index) => (
                  <th
                    key={day.day}
                    className={`border-b border-r border-[var(--color-border-default)] p-2 text-center ${
                      index === currentDay ? 'bg-[var(--color-primary-50)]' : ''
                    }`}
                  >
                    <p className="text-sm font-medium text-[var(--color-text-primary)]">
                      {day.day}
                    </p>
                    <p
                      className={`text-lg font-bold ${
                        index === currentDay
                          ? 'text-[var(--color-primary-600)]'
                          : 'text-[var(--color-text-secondary)]'
                      }`}
                    >
                      {day.date}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time) => (
                <tr key={time}>
                  <td className="border-b border-r border-[var(--color-border-default)] p-2 text-center">
                    <span className="text-xs text-[var(--color-text-tertiary)]">
                      {time}
                    </span>
                  </td>
                  {weekDays.map((day, dayIndex) => {
                    const slot = day.slots.find((s) => s.time === time);
                    return (
                      <td
                        key={`${day.day}-${time}`}
                        className={`border-b border-r border-[var(--color-border-default)] p-1 ${
                          dayIndex === currentDay
                            ? 'bg-[var(--color-primary-50)]'
                            : ''
                        }`}
                      >
                        {isLoading ? (
                          <Skeleton className="h-8 w-full" />
                        ) : slot ? (
                          <button
                            onClick={() => onSlotClick?.(dayIndex, time)}
                            className="h-full w-full rounded bg-[var(--color-primary-100)] p-1 text-left hover:bg-[var(--color-primary-200)]"
                          >
                            <p className="truncate text-xs font-medium text-[var(--color-primary-700)]">
                              {slot.course}
                            </p>
                            {slot.room && (
                              <p className="truncate text-[10px] text-[var(--color-primary-600)]">
                                {slot.room}
                              </p>
                            )}
                          </button>
                        ) : null}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
);
WeeklyTimetable.displayName = 'WeeklyTimetable';

export { WeeklyTimetable };
