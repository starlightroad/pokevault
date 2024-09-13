import { POKE_API_V2_URL } from '@/app/_lib/constants';
import type { NamedAPIResourceList } from '@/app/_lib/definitions';

export const fetchPokemon = async (limit = 8) => {
  const requestUrl = `${POKE_API_V2_URL}/pokemon?limit=${limit}`;

  try {
    const response = await fetch(requestUrl);
    const data: NamedAPIResourceList = await response.json();

    return data;
  } catch (error) {
    throw new Error('Failed to Fetch All Pokemon.');
  }
};
