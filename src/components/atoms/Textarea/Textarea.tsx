import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] px-3 py-2 text-sm text-[var(--color-text-primary)] transition-colors placeholder:text-[var(--color-text-tertiary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] disabled:cursor-not-allowed disabled:opacity-50 resize-none',
  {
    variants: {
      variant: {
        default: 'border-[var(--color-border-default)]',
        error:
          'border-[var(--color-status-error-text)] focus-visible:ring-[var(--color-status-error-text)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TextareaProps
  extends
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={textareaVariants({ variant, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
