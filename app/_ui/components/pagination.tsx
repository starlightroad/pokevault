'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { usePathname, useSearchParams } from 'next/navigation';
import { generatePagination } from '@/app/_lib/utils';
import { ELLIPSIS } from '@/app/_lib/constants';

type PaginationArrowProps = {
  direction: 'left' | 'right';
  href: string;
  isDisabled: boolean;
};

function PaginationArrow({ direction, href, isDisabled }: PaginationArrowProps) {
  const LeftArrow = <ChevronLeftIcon size={20} />;
  const RightArrow = <ChevronRightIcon size={20} />;

  const Arrow = direction === 'left' ? LeftArrow : RightArrow;

  if (isDisabled) {
    return (
      <span className="flex h-8 min-w-8 cursor-not-allowed items-center justify-center opacity-30">
        {Arrow}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="flex h-8 min-w-8 items-center justify-center rounded-full hover:bg-slate-100"
    >
      {Arrow}
    </Link>
  );
}

export default function Pagination({ pages }: { pages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', pageNumber.toString());

    return `${pathname}?${params}`;
  };

  const totalPages = generatePagination(+currentPage, +pages);

  if (!totalPages) return false;

  return (
    <nav>
      <ul className="flex gap-3">
        <li className="flex items-center justify-center">
          <PaginationArrow
            direction="left"
            href={createPageUrl(+currentPage - 1)}
            isDisabled={+currentPage <= 1}
          />
        </li>
        {totalPages.map((page) => {
          if (page === ELLIPSIS) return page;

          const key = `pagination-link-${page}`;

          const isCurrentPage = page === +currentPage;

          const classes = clsx(
            'flex items-center justify-center rounded-full min-w-8 h-8 text-sm',
            {
              'bg-slate-700 text-white hover:bg-slate-700/90': isCurrentPage,
              'hover:bg-slate-100': !isCurrentPage,
            },
          );

          return (
            <Link key={key} href={createPageUrl(+page)} className={classes}>
              {page}
            </Link>
          );
        })}
        <li className="flex items-center justify-center">
          <PaginationArrow
            direction="right"
            href={createPageUrl(+currentPage + 1)}
            isDisabled={+currentPage >= +pages}
          />
        </li>
      </ul>
    </nav>
  );
}
