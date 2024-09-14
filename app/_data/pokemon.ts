import { POKE_API_V2_URL } from '@/app/_lib/constants';
import type { NamedAPIResourceList } from '@/app/_lib/definitions';

export const fetchPokemon = async (limit = 8, offset?: number) => {
  const requestUrl = new URL(`${POKE_API_V2_URL}/pokemon`);

  if (limit) requestUrl.searchParams.set('limit', limit.toString());
  if (offset) requestUrl.searchParams.set('offset', offset.toString());

  try {
    const response = await fetch(requestUrl);
    const data: NamedAPIResourceList = await response.json();

    return data;
  } catch (error) {
    throw new Error('Failed to Fetch All Pokemon.');
  }
};

export const fetchOnePokemon = async (pokemonId: number) => {
  const requestUrl = `${POKE_API_V2_URL}/pokemon/${pokemonId}`;

  try {
    const response = await fetch(requestUrl);
    const data = response.json();

    return data;
  } catch (error) {
    throw new Error('Failed to Fetch One Pokemon.');
  }
};
