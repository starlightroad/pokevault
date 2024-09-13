import Image from 'next/image';
import Link from 'next/link';
import { Card, CardFooter } from '@/app/_ui/components/core/card';
import Badge from '@/app/_ui/components/core/badge';
import {
  generatePokemonAssetUrl,
  getPokemonIdFromUrlInResourceList,
  padPokemonId,
} from '@/app/_lib/utils';
import { fetchPokemon } from '@/app/_data/pokemon';

type Props = {
  pokemonData: Awaited<ReturnType<typeof fetchPokemon>>;
};

export default function PokemonList({ pokemonData }: Props) {
  if (!pokemonData.results.length) {
    return (
      <div className="px-3 md:px-5">
        <p className="my-10 text-center text-sm text-slate-500">No Pokemon data to display.</p>
      </div>
    );
  }

  return (
    <ul className="grid gap-5 pt-2 sm:grid-cols-2 md:grid-cols-4">
      {pokemonData.results.map((data) => {
        const pokemonId = getPokemonIdFromUrlInResourceList(data.url);
        const pokemonUrlHref = `/pokemon/${pokemonId}`;

        const badgeValue = padPokemonId(Number(pokemonId));

        const imageUrl = generatePokemonAssetUrl(Number(pokemonId));

        const key = `pokemon-${pokemonId}`;

        return (
          <li key={key}>
            <Link href={pokemonUrlHref} className="block rounded-2xl">
              <Card>
                <Badge>#{badgeValue}</Badge>
                <Image src={imageUrl} width={215} height={215} alt="Monster" />
                <CardFooter>
                  <p className="text-sm font-medium capitalize">{data.name}</p>
                </CardFooter>
              </Card>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
