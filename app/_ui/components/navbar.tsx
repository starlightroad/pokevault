import Link from 'next/link';
import Image from 'next/image';
import { SunIcon } from 'lucide-react';
import GitHubIcon from '@/app/_ui/components/github-icon';
import { siteConfig } from '@/app/_lib/config';

function NavbarList({ children }: { children: React.ReactNode }) {
  return <ul className="flex gap-2">{children}</ul>;
}

function NavbarListItem({ children }: { children: React.ReactNode }) {
  return <li className="bg-inherit">{children}</li>;
}

function ThemeButton() {
  return (
    <button type="button" className="h-9 rounded-lg border px-2">
      <SunIcon size={20} />
    </button>
  );
}

function GitHubLink() {
  return (
    <Link
      href={siteConfig.links.gitHubProfile}
      target="_blank"
      className="flex h-9 items-center rounded-lg border px-2"
    >
      <GitHubIcon size={20} />
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-3 flex h-14 w-full items-center justify-between rounded-2xl border bg-white px-5">
      <nav>
        <Link href="/" className="flex items-center gap-1">
          <Image src="/static/poke-ball.png" width={30} height={30} alt="App logo" />
          <span className="text-sm font-medium text-slate-600">PokeVault</span>
        </Link>
      </nav>
      <NavbarList>
        <NavbarListItem>
          <ThemeButton />
        </NavbarListItem>
        <NavbarListItem>
          <GitHubLink />
        </NavbarListItem>
      </NavbarList>
    </header>
  );
}
