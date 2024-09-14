import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import type { Pokemon } from '@/app/_lib/definitions';
import { Card, CardFooter } from '@/app/_ui/components/core/card';
import Badge from '@/app/_ui/components/core/badge';
import { fetchPokemon } from '@/app/_data/pokemon';
import { generatePokemonAssetUrl, getPokemonTypeColors, padPokemonId } from '@/app/_lib/utils';

function PokemonTypeBadgesList({ data }: { data: Pokemon }) {
  return (
    <div className="flex items-center justify-center space-x-1">
      {data.types.map((type) => {
        const key = `${data.species.name}-type-${type.type.name}`;
        const { backgroundColor, textColor } = getPokemonTypeColors(type.type.name);

        const classes = clsx(
          'rounded-xl px-2 py-0.5 text-xs capitalize',
          backgroundColor,
          textColor,
        );

        return (
          <span key={key} className={classes}>
            {type.type.name}
          </span>
        );
      })}
    </div>
  );
}

type Props = {
  pokemonData: Awaited<ReturnType<typeof fetchPokemon>>;
};

export default async function PokemonList({ pokemonData }: Props) {
  if (!pokemonData.results.length) {
    return (
      <div className="px-3 md:px-5">
        <p className="my-10 text-center text-sm text-slate-500">No Pokemon data to display.</p>
      </div>
    );
  }

  const pokemonResponses = await Promise.all(pokemonData.results.map((data) => fetch(data.url)));
  const resolvedData: Pokemon[] = await Promise.all(pokemonResponses.map((res) => res.json()));

  return (
    <ul className="grid gap-5 pt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {resolvedData.map((data) => {
        const pokemonId = data.id;
        const pokemonUrlHref = `/pokemon/${pokemonId}`;

        const badgeValue = padPokemonId(Number(pokemonId));

        const imageUrl = generatePokemonAssetUrl(Number(pokemonId));

        const key = `pokemon-${pokemonId}`;

        return (
          <li key={key}>
            <Link href={pokemonUrlHref} className="block rounded-2xl">
              <Card className="bg-white">
                <Badge className="px-2 py-1 text-xs text-slate-700">{badgeValue}</Badge>
                <Image src={imageUrl} width={215} height={215} alt="Monster" className="mx-auto" />
                <CardFooter>
                  <p className="mb-3 font-medium capitalize text-slate-700">{data.species.name}</p>
                  <PokemonTypeBadgesList data={data} />
                </CardFooter>
              </Card>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
