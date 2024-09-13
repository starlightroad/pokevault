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
