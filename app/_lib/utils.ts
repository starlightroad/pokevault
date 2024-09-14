import { ELLIPSIS, POKE_ASSETS_URL, POKEMON_PER_PAGE } from '@/app/_lib/constants';
import type { PokemonTypeUnion } from '@/app/_lib/definitions';

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

export const getPokemonTypeColors = (type: PokemonTypeUnion) => {
  const colorClassNames = {
    backgroundColor: 'bg-gray-100',
    textColor: 'text-gray-700',
  };

  switch (type) {
    case 'normal': {
      colorClassNames.backgroundColor = 'bg-gray-300';
      return colorClassNames;
    }
    case 'fighting': {
      colorClassNames.backgroundColor = 'bg-orange-600';
      colorClassNames.textColor = 'text-white';
      return colorClassNames;
    }
    case 'flying': {
      colorClassNames.backgroundColor = 'bg-sky-300';
      return colorClassNames;
    }
    case 'poison': {
      colorClassNames.backgroundColor = 'bg-fuchsia-300';
      return colorClassNames;
    }
    case 'ground': {
      colorClassNames.backgroundColor = 'bg-amber-300';
      return colorClassNames;
    }
    case 'rock': {
      colorClassNames.backgroundColor = 'bg-yellow-500';
      return colorClassNames;
    }
    case 'bug': {
      colorClassNames.backgroundColor = 'bg-lime-500';
      return colorClassNames;
    }
    case 'ghost': {
      colorClassNames.backgroundColor = 'bg-purple-500';
      colorClassNames.textColor = 'text-white';
      return colorClassNames;
    }
    case 'steel': {
      colorClassNames.backgroundColor = 'bg-slate-300';
      return colorClassNames;
    }
    case 'fire': {
      colorClassNames.backgroundColor = 'bg-orange-500';
      colorClassNames.textColor = 'text-white';
      return colorClassNames;
    }
    case 'water': {
      colorClassNames.backgroundColor = 'bg-sky-500';
      colorClassNames.textColor = 'text-white';
      return colorClassNames;
    }
    case 'grass': {
      colorClassNames.backgroundColor = 'bg-lime-300';
      return colorClassNames;
    }
    case 'electric': {
      colorClassNames.backgroundColor = 'bg-yellow-300';
      return colorClassNames;
    }
    case 'psychic': {
      colorClassNames.backgroundColor = 'bg-pink-400';
      colorClassNames.textColor = 'text-white';
      return colorClassNames;
    }
    case 'ice': {
      colorClassNames.backgroundColor = 'bg-cyan-300';
      return colorClassNames;
    }
    case 'dragon': {
      colorClassNames.backgroundColor = 'bg-blue-300';
      return colorClassNames;
    }
    case 'dark': {
      colorClassNames.backgroundColor = 'bg-gray-400';
      colorClassNames.textColor = 'text-white';
      return colorClassNames;
    }
    case 'fairy': {
      colorClassNames.backgroundColor = 'bg-pink-200';
      return colorClassNames;
    }
    case 'stellar': {
      colorClassNames.backgroundColor = 'bg-teal-200';
      return colorClassNames;
    }
    case 'unknown': {
      colorClassNames.backgroundColor = 'bg-gray-100';
      return colorClassNames;
    }
    default: {
      return colorClassNames;
    }
  }
};
