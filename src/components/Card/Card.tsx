import type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from "./types";

const shadowStyles = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  none: "shadow-none",
};

const paddingStyles = {
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
  none: "p-0",
};

export function Card({
  children,
  className = "",
  shadow = "md",
  hoverable = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-lg border border-gray-200
        ${shadowStyles[shadow]}
        ${hoverable ? "transition-shadow duration-200 hover:shadow-lg" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, action, className = "" }: CardHeaderProps) {
  return (
    <div className={`flex items-center justify-between px-4 py-3 border-b border-gray-200 ${className}`}>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

export function CardBody({ children, className = "" }: CardBodyProps) {
  return <div className={`${paddingStyles.md} ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`flex items-center justify-end gap-2 px-4 py-3 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  );
}
