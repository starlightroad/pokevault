export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border p-3">{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <footer className="text-center">{children}</footer>;
}
