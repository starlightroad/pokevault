export default function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-slate-200 px-2 py-1 text-sm">{children}</span>;
}
