import { ELLIPSIS, POKE_ASSETS_URL, POKEMON_PER_PAGE } from '@/app/_lib/constants';

export const padPokemonId = (id: number, maxLength = 4) => {
  return id.toString().padStart(maxLength, '0');
};

export const generatePokemonAssetUrl = (id: number) => {
  const newId = padPokemonId(id, id < 1000 ? 3 : 4);
  const newUrl = new URL(`${POKE_ASSETS_URL}/${newId}.png`);

  return newUrl.href;
};

export const getPokemonIdFromUrlInResourceList = (url: string) => {
  const newUrl = new URL(url);
  const { pathname } = newUrl;

  const regularExpression = /(\d{1,})(?:\/)$/gm;
  const regularExpressionArray = regularExpression.exec(pathname);

  if (!regularExpressionArray) return null;

  const [_, id] = regularExpressionArray;

  return id;
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, idx) => idx + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, ELLIPSIS, totalPages];
  }

  if (currentPage >= totalPages - 4) {
    return [
      1,
      ELLIPSIS,
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [1, ELLIPSIS, currentPage - 1, currentPage, currentPage + 1, ELLIPSIS, totalPages];
};

export const calculatePaginationOffset = (pageNumber: number) => {
  const offsetValue = (pageNumber - 1) * POKEMON_PER_PAGE;

  return pageNumber > 1 ? offsetValue : 0;
};
