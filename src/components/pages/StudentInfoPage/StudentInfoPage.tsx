import * as React from 'react';
import { StudentInfoForm } from '../../organisms';
import { Button } from '../../atoms';
import { GraduationCap } from 'lucide-react';
import type { StudentInfoData } from '../../organisms';

interface StudentInfoPageProps {
  onSubmit?: (data: StudentInfoData) => void;
  onSkip?: () => void;
  isLoading?: boolean;
  defaultValues?: Partial<StudentInfoData>;
}

export const StudentInfoPage: React.FC<StudentInfoPageProps> = ({
  onSubmit,
  onSkip,
  isLoading = false,
  defaultValues,
}) => {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-surface-base)]">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg space-y-8">
          <div className="space-y-2 text-center">
            <div className="flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-action-default)]">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
              학생 정보 입력
            </h1>
            <p className="text-[var(--color-text-secondary)]">
              서비스를 이용하기 위해 학생 정보를 입력해주세요.
            </p>
          </div>

          <StudentInfoForm
            onSubmit={onSubmit}
            isLoading={isLoading}
            defaultValues={defaultValues}
          />

          {onSkip && (
            <Button
              type="button"
              variant="ghost"
              size="md"
              className="w-full"
              onClick={onSkip}
            >
              나중에 입력하기
            </Button>
          )}

          <p className="text-center text-xs text-[var(--color-text-tertiary)]">
            입력한 정보는 학생 인증을 위해서만 사용됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export type { StudentInfoPageProps };
export type { StudentInfoData };
