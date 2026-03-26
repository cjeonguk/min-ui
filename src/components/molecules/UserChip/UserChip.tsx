import * as React from 'react';
import { Avatar } from '../../atoms/Avatar';
import { Link } from '../../atoms/Link';
import { Tag } from '../../atoms/Tag';
import type { AvatarProps } from '../../atoms/Avatar';
import type { LinkProps } from '../../atoms/Link';
import type { TagProps } from '../../atoms/Tag';

export interface UserChipProps {
  avatar?: Omit<AvatarProps, 'ref'>;
  name: string;
  role?: string;
  href?: string;
  linkProps?: Omit<LinkProps, 'ref' | 'children' | 'href'>;
  tagProps?: Omit<TagProps, 'ref'>;
  className?: string;
}

const UserChip = React.forwardRef<HTMLDivElement, UserChipProps>(
  ({ avatar, name, role, href, linkProps, tagProps, className }, ref) => {
    const content = (
      <div
        ref={ref}
        className={`inline-flex items-center gap-2 ${className ?? ''}`}
      >
        {avatar && <Avatar {...avatar} fallback={name} />}
        <div className="flex flex-col">
          <span className="text-sm font-medium text-[var(--color-text-primary)] leading-tight">
            {name}
          </span>
          {role && (
            <Tag size="sm" className="mt-0.5" {...tagProps}>
              {role}
            </Tag>
          )}
        </div>
      </div>
    );

    if (href) {
      return (
        <Link href={href} {...linkProps}>
          {content}
        </Link>
      );
    }

    return content;
  }
);
UserChip.displayName = 'UserChip';

export { UserChip };
