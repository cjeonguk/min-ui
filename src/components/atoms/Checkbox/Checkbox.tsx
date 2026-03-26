import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const checkboxIndicatorVariants = cva(
  'flex h-4 w-4 items-center justify-center rounded-sm',
  {
    variants: {
      state: {
        checked: 'text-[var(--color-action-foreground)]',
        unchecked: 'text-transparent',
        indeterminate: 'text-[var(--color-action-foreground)]',
      },
    },
    defaultVariants: {
      state: 'unchecked',
    },
  }
);

export interface CheckboxProps
  extends
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxIndicatorVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={`peer h-5 w-5 shrink-0 rounded border border-[var(--color-border-strong)] bg-[var(--color-surface-raised)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--color-action-default)] data-[state=checked]:border-[var(--color-action-default)] data-[state=indeterminate]:bg-[var(--color-action-default)] data-[state=indeterminate]:border-[var(--color-action-default)] ${className ?? ''}`}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={checkboxIndicatorVariants({
        state: props.checked
          ? 'checked'
          : props.checked === undefined
            ? 'indeterminate'
            : 'unchecked',
      })}
    >
      <Check className="h-3 w-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
