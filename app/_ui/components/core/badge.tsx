import { twMerge } from 'tailwind-merge';

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={twMerge('rounded-full bg-slate-200 px-2 py-1 text-sm', className)}>
      {children}
    </span>
  );
}
