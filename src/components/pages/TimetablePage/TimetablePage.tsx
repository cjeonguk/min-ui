import * as React from 'react';
import { CourseInputForm } from '../../organisms';
import { WeeklyTimetable, type DaySchedule } from '../../organisms';
import { Button } from '../../atoms';
import { Plus } from 'lucide-react';

interface TimetablePageProps {
  courses?: Course[];
  schedule?: DaySchedule[];
  onAddCourse?: (course: CourseInput) => void;
  onRemoveCourse?: (courseId: string) => void;
}

interface Course {
  id: string;
  name: string;
  time?: string;
  location?: string;
}

interface CourseInput {
  name: string;
  time?: string;
  location?: string;
}

export const TimetablePage: React.FC<TimetablePageProps> = ({
  courses = [],
  schedule = [],
  onAddCourse,
  onRemoveCourse,
}) => {
  const [showAddForm, setShowAddForm] = React.useState(false);

  const handleAddCourse = (course: CourseInput) => {
    onAddCourse?.(course);
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-base)]">
      <header className="sticky top-0 z-10 border-b border-[var(--color-border-default)] bg-[var(--color-surface-base)] px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-[var(--color-text-primary)]">
            시간표
          </h1>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            <Plus className="h-4 w-4" />
            강의 추가
          </Button>
        </div>
      </header>

      <main className="px-4 py-4">
        {showAddForm && (
          <div className="mb-6">
            <CourseInputForm
              onAddCourse={handleAddCourse}
              onRemoveCourse={onRemoveCourse}
              className="mb-6"
            />
          </div>
        )}

        <WeeklyTimetable schedule={schedule} className="mb-6" />

        {courses.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-[var(--color-text-secondary)]">
              등록된 강의 ({courses.length})
            </h2>
            <div className="space-y-2">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center justify-between rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] p-3"
                >
                  <div>
                    <p className="font-medium text-[var(--color-text-primary)]">
                      {course.name}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {course.time && `${course.time} · `}
                      {course.location || '장소 미지정'}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveCourse?.(course.id)}
                  >
                    삭제
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export type { TimetablePageProps };
