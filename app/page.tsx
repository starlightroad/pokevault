import { fetchPokemon } from '@/app/_data/pokemon';
import PokemonList from '@/app/_ui/components/pokemon-list';
import Pagination from '@/app/_ui/components/pagination';

export default async function Home() {
  const pokemonData = await fetchPokemon();
  const totalPages = Math.ceil(pokemonData.count / 8);

  return (
    <main className="pt-20">
      <PokemonList pokemonData={pokemonData} />
      <Pagination pages={totalPages} />
    </main>
  );
}
