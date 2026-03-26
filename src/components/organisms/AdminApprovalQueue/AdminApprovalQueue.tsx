import * as React from 'react';
import { Check, X } from 'lucide-react';
import { Avatar } from '../../atoms/Avatar';
import { Button } from '../../atoms/Button';
import { Badge } from '../../atoms/Badge';
import { Divider } from '../../atoms/Divider';

export interface ApprovalRequest {
  id: string;
  name: string;
  email: string;
  studentId?: string;
  avatar?: string;
  department?: string;
  requestedAt: Date | string | number;
}

export interface AdminApprovalQueueProps {
  requests?: ApprovalRequest[];
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
  isLoading?: boolean;
  className?: string;
}

const AdminApprovalQueue = React.forwardRef<
  HTMLDivElement,
  AdminApprovalQueueProps
>(
  (
    { requests = [], onApprove, onReject, isLoading = false, className },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] ${className ?? ''}`}
      >
        <div className="border-b border-[var(--color-border-default)] p-4">
          <h2 className="font-semibold text-[var(--color-text-primary)]">
            승인 대기 목록
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {requests.length}건의 요청이 있습니다
          </p>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-[var(--color-text-tertiary)]">
              로딩 중...
            </div>
          ) : requests.length === 0 ? (
            <div className="p-8 text-center text-[var(--color-text-tertiary)]">
              승인 대기 중인 요청이 없습니다
            </div>
          ) : (
            requests.map((request, index) => (
              <React.Fragment key={request.id}>
                {index > 0 && <Divider />}
                <div className="flex items-center gap-4 p-4">
                  <Avatar
                    src={request.avatar}
                    fallback={request.name}
                    size="lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-[var(--color-text-primary)]">
                        {request.name}
                      </p>
                      {request.department && (
                        <Badge variant="primary" size="sm">
                          {request.department}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {request.email}
                    </p>
                    {request.studentId && (
                      <p className="text-xs text-[var(--color-text-tertiary)]">
                        학번: {request.studentId}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => onApprove?.(request.id)}
                    >
                      <Check className="h-4 w-4" />
                      승인
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => onReject?.(request.id)}
                    >
                      <X className="h-4 w-4" />
                      거절
                    </Button>
                  </div>
                </div>
              </React.Fragment>
            ))
          )}
        </div>
      </div>
    );
  }
);
AdminApprovalQueue.displayName = 'AdminApprovalQueue';

export { AdminApprovalQueue };
