import { fetchPokemon } from '@/app/_data/pokemon';
import PokemonList from '@/app/_ui/components/pokemon-list';

export default async function Home() {
  const pokemonData = await fetchPokemon();

  return (
    <main className="pt-20">
      <PokemonList pokemonData={pokemonData} />
    </main>
  );
}
