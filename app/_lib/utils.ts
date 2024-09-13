import { POKE_ASSETS_URL } from '@/app/_lib/constants';

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
