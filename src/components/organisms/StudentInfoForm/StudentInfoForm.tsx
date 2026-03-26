import * as React from 'react';
import { Button } from '../../atoms/Button';
import { Spinner } from '../../atoms/Spinner';
import { FormField } from '../../molecules/FormField';

export interface StudentInfoFormProps {
  onSubmit?: (data: StudentInfoData) => void;
  isLoading?: boolean;
  defaultValues?: Partial<StudentInfoData>;
  className?: string;
}

export interface StudentInfoData {
  studentId: string;
  name: string;
  email: string;
  department: string;
  phone: string;
}

const StudentInfoForm = React.forwardRef<HTMLFormElement, StudentInfoFormProps>(
  ({ onSubmit, isLoading = false, defaultValues, className }, ref) => {
    const [formData, setFormData] = React.useState<StudentInfoData>({
      studentId: defaultValues?.studentId || '',
      name: defaultValues?.name || '',
      email: defaultValues?.email || '',
      department: defaultValues?.department || '',
      phone: defaultValues?.phone || '',
    });

    const handleChange =
      (field: keyof StudentInfoData) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit?.(formData);
    };

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={`space-y-4 ${className ?? ''}`}
      >
        <FormField
          label="학번"
          required
          inputProps={{
            value: formData.studentId,
            onChange: handleChange('studentId'),
            placeholder: '2021001234',
          }}
        />

        <FormField
          label="이름"
          required
          inputProps={{
            value: formData.name,
            onChange: handleChange('name'),
            placeholder: '홍길동',
          }}
        />

        <FormField
          label="이메일"
          required
          inputProps={{
            type: 'email',
            value: formData.email,
            onChange: handleChange('email'),
            placeholder: 'student@university.ac.kr',
          }}
        />

        <FormField
          label="소속 학과"
          required
          inputProps={{
            value: formData.department,
            onChange: handleChange('department'),
            placeholder: '컴퓨터공학과',
          }}
        />

        <FormField
          label="전화번호"
          inputProps={{
            type: 'tel',
            value: formData.phone,
            onChange: handleChange('phone'),
            placeholder: '010-1234-5678',
          }}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? <Spinner size="sm" spinnerColor="white" /> : '저장'}
        </Button>
      </form>
    );
  }
);
StudentInfoForm.displayName = 'StudentInfoForm';

export { StudentInfoForm };
