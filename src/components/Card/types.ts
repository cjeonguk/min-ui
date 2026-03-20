import type { ReactNode } from "react";
import type { ButtonVariant } from "../Button";

export interface CardProps {
  children: ReactNode;
  className?: string;
  shadow?: "sm" | "md" | "lg" | "none";
  hoverable?: boolean;
}

export interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  className?: string;
}

export interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export interface CardFooterProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}
