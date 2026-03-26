import * as React from 'react';
import { X } from 'lucide-react';
import { Avatar } from '../../atoms/Avatar';
import { Button } from '../../atoms/Button';
import { Textarea } from '../../atoms/Textarea';
import { MediaAttachBar } from '../../molecules/MediaAttachBar';
import { ImageThumb } from '../../atoms/ImageThumb';

export interface PostComposerProps {
  user?: {
    name: string;
    avatar?: string;
  };
  placeholder?: string;
  onSubmit?: (content: string, images: File[]) => void;
  onCancel?: () => void;
  className?: string;
}

const PostComposer = React.forwardRef<HTMLDivElement, PostComposerProps>(
  (
    {
      user,
      placeholder = '무슨 생각을 하고 있나요?',
      onSubmit,
      onCancel,
      className,
    },
    ref
  ) => {
    const [content, setContent] = React.useState('');
    const [images, setImages] = React.useState<File[]>([]);
    const [isFocused, setIsFocused] = React.useState(false);

    const handleSubmit = () => {
      if (content.trim() || images.length > 0) {
        onSubmit?.(content, images);
        setContent('');
        setImages([]);
        setIsFocused(false);
      }
    };

    const handleCancel = () => {
      setContent('');
      setImages([]);
      setIsFocused(false);
      onCancel?.();
    };

    const handleRemoveImage = (index: number) => {
      setImages((prev) => prev.filter((_, i) => i !== index));
    };

    return (
      <div
        ref={ref}
        className={`overflow-hidden rounded-xl border bg-[var(--color-surface-raised)] transition-shadow ${
          isFocused
            ? 'border-[var(--color-primary-500)] shadow-sm'
            : 'border-[var(--color-border-default)]'
        } ${className ?? ''}`}
      >
        <div className="flex gap-3 p-4">
          {user && <Avatar src={user.avatar} fallback={user.name} size="md" />}
          <div className="flex-1">
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onFocus={() => setIsFocused(true)}
              placeholder={placeholder}
              className="min-h-[80px] resize-none border-0 bg-transparent p-0 focus-visible:ring-0"
            />

            {images.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {images.map((file, index) => (
                  <div key={index} className="relative">
                    <ImageThumb
                      src={URL.createObjectURL(file)}
                      alt="attachment"
                      aspect="square"
                      size="lg"
                      rounded="lg"
                    />
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="absolute -top-2 -right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[var(--color-border-default)] px-4 py-3">
          <MediaAttachBar
            onAttachImage={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = 'image/*';
              input.multiple = true;
              input.onchange = (e) => {
                const files = (e.target as HTMLInputElement).files;
                if (files) {
                  setImages((prev) => [...prev, ...Array.from(files)]);
                }
              };
              input.click();
            }}
            onAttachFile={() => {}}
            onAttachLink={() => {}}
          />

          {isFocused && (
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={handleCancel}>
                취소
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleSubmit}
                disabled={!content.trim() && images.length === 0}
              >
                게시
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
);
PostComposer.displayName = 'PostComposer';

export { PostComposer };
