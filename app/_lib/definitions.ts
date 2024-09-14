export type NamedAPIResourceList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
};

export type NamedAPIResource = {
  name: string;
  url: string;
};

export type Pokemon = {
  id: number;
  abilities: PokemonAbility[];
  base_experience: number;
  height: number;
  species: {
    name: string;
  };
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
};

type PokemonType = {
  slot: number;
  type: {
    name: PokemonTypeUnion;
    url: string;
  };
};

type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
};

type PokemonAbility = {
  slot: number;
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
};

export type PokemonTypeUnion =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'stellar'
  | 'unknown';
