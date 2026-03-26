import * as React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { CourseChip } from '../../molecules/CourseChip';

export interface Course {
  id: string;
  name: string;
  time?: string;
  location?: string;
}

export interface CourseInputFormProps {
  courses?: Course[];
  onAddCourse?: (course: Omit<Course, 'id'>) => void;
  onRemoveCourse?: (id: string) => void;
  onSubmit?: (courses: Course[]) => void;
  className?: string;
}

const CourseInputForm = React.forwardRef<HTMLDivElement, CourseInputFormProps>(
  ({ courses = [], onAddCourse, onRemoveCourse, onSubmit, className }, ref) => {
    const [courseName, setCourseName] = React.useState('');
    const [courseTime, setCourseTime] = React.useState('');
    const [courseLocation, setCourseLocation] = React.useState('');

    const handleAddCourse = () => {
      if (courseName.trim()) {
        onAddCourse?.({
          name: courseName,
          time: courseTime || undefined,
          location: courseLocation || undefined,
        });
        setCourseName('');
        setCourseTime('');
        setCourseLocation('');
      }
    };

    return (
      <div
        ref={ref}
        className={`rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] p-4 ${className ?? ''}`}
      >
        <h3 className="mb-4 font-semibold text-[var(--color-text-primary)]">
          수강 과목
        </h3>

        <div className="mb-4 space-y-3">
          <Input
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="과목명"
            inputSize="sm"
          />
          <div className="flex gap-2">
            <Input
              value={courseTime}
              onChange={(e) => setCourseTime(e.target.value)}
              placeholder="시간 (예: 월 10:00-12:00)"
              inputSize="sm"
              className="flex-1"
            />
            <Input
              value={courseLocation}
              onChange={(e) => setCourseLocation(e.target.value)}
              placeholder="강의실"
              inputSize="sm"
              className="w-32"
            />
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleAddCourse}
            disabled={!courseName.trim()}
            className="w-full"
          >
            <Plus className="h-4 w-4" />
            과목 추가
          </Button>
        </div>

        {courses.length > 0 && (
          <div className="space-y-2">
            {courses.map((course) => (
              <CourseChip
                key={course.id}
                name={course.name}
                time={course.time}
                location={course.location}
                onRemove={() => onRemoveCourse?.(course.id)}
              />
            ))}
          </div>
        )}

        {onSubmit && (
          <div className="mt-4">
            <Button
              variant="primary"
              onClick={() => onSubmit(courses)}
              className="w-full"
            >
              저장
            </Button>
          </div>
        )}
      </div>
    );
  }
);
CourseInputForm.displayName = 'CourseInputForm';

export { CourseInputForm };
