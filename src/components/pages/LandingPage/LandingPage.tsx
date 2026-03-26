import * as React from 'react';
import { GoogleLoginButton } from '../../organisms';
import { FileQuestion } from 'lucide-react';

interface LandingPageProps {
  onLoginSuccess?: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onLoginSuccess }) => {
  const handleLogin = () => {
    onLoginSuccess?.();
  };

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-surface-base)]">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8 text-center">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--color-action-default)]">
                <FileQuestion className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-[var(--color-text-primary)]">
              MinUI
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)]">
              대학 생활을 위한 통합 플랫폼
            </p>
          </div>

          <div className="space-y-4 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-subtle)] p-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-600)]">
                  <span className="text-sm font-semibold">1</span>
                </div>
                <span className="text-sm text-[var(--color-text-primary)]">
                  학생 인증으로 안전한 커뮤니티
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-600)]">
                  <span className="text-sm font-semibold">2</span>
                </div>
                <span className="text-sm text-[var(--color-text-primary)]">
                  스터디 그룹 및 동아리 참여
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-600)]">
                  <span className="text-sm font-semibold">3</span>
                </div>
                <span className="text-sm text-[var(--color-text-primary)]">
                  실시간 채팅 및 일정 관리
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <GoogleLoginButton onClick={handleLogin} />
            <p className="text-xs text-[var(--color-text-tertiary)]">
              로그인하면{' '}
              <a
                href="#"
                className="text-[var(--color-text-link)] hover:underline"
              >
                이용약관
              </a>{' '}
              및{' '}
              <a
                href="#"
                className="text-[var(--color-text-link)] hover:underline"
              >
                개인정보처리방침
              </a>
              에 동의하는 것으로 간주됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export type { LandingPageProps };
