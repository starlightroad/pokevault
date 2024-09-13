export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-screen-sm px-4 md:px-5">{children}</div>;
}
