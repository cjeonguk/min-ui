import * as React from 'react';
import { Clock } from 'lucide-react';
import { ApprovalStatusBanner } from '../../molecules';
import { Button } from '../../atoms';

interface PendingApprovalPageProps {
  studentName?: string;
  onGoBack?: () => void;
}

export const PendingApprovalPage: React.FC<PendingApprovalPageProps> = ({
  studentName = '학생',
  onGoBack,
}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-surface-base)] px-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-secondary-100)]">
              <Clock className="h-8 w-8 text-[var(--color-secondary-600)]" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
            승인 대기 중
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            {studentName}님의 회원가입 요청이 관리자의 승인을 기다리고 있습니다.
          </p>
        </div>

        <ApprovalStatusBanner
          status="pending"
          message="일반적으로 승인 처리는 24시간 이내에 완료됩니다."
        />

        <div className="space-y-3 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] p-4 text-left">
          <h3 className="font-semibold text-[var(--color-text-primary)]">
            승인 후 이용 가능한 서비스
          </h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary-500)]" />
              커뮤니티 게시판 글 작성 및 댓글
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary-500)]" />
              스터디 그룹 및 동아리 가입
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary-500)]" />
              실시간 채팅 및 메시지
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary-500)]" />
              시간표 및 시설 예약
            </li>
          </ul>
        </div>

        <Button variant="secondary" onClick={onGoBack} className="w-full">
          이전 페이지로 돌아가기
        </Button>

        <p className="text-xs text-[var(--color-text-tertiary)]">
          문의 사항이 있으시면 support@university.ac.kr로 연락주세요.
        </p>
      </div>
    </div>
  );
};

export type { PendingApprovalPageProps };
