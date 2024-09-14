import { twMerge } from 'tailwind-merge';

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={twMerge('rounded-2xl border p-3', className)}>{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <footer className="text-center">{children}</footer>;
}
