import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRightIcon } from 'lucide-react';
import { fetchOnePokemon } from '@/app/_data/pokemon';
import { POKE_ASSETS_URL } from '@/app/_lib/constants';
import { Card } from '@/app/_ui/components/core/card';

export default async function Home() {
  const helioliskId = 695;
  const helioliskData = await fetchOnePokemon(helioliskId);
  const imageUrl = `${POKE_ASSETS_URL}/${helioliskData.id}.png`;

  return (
    <main className="pt-20">
      <section className="mt-10">
        <header className="text-center">
          <h1 className="mb-10 mt-2 text-center text-5xl font-medium text-slate-700">
            Pokemon Data from All Generations
          </h1>
        </header>
      </section>
      <section>
        <Card className="grid items-center border-yellow-300 bg-yellow-300 p-10 sm:grid-cols-4">
          <div className="col-span-4 text-center sm:col-span-2 sm:text-start">
            <h2 className="mb-5 text-4xl font-medium text-slate-700">See It in Action</h2>
            <Link
              href="/pokedex"
              className="inline-flex h-10 items-center space-x-2 rounded-full bg-slate-700 px-5 leading-10 text-white"
            >
              <span>View Pokedex</span>
              <ArrowUpRightIcon className="text-white" size={20} />
            </Link>
          </div>
          <div className="col-span-4 flex items-center justify-center sm:col-span-2 sm:justify-end">
            <Image src={imageUrl} width={215} height={215} alt="Heliolisk the generator Pokemon" />
          </div>
        </Card>
      </section>
    </main>
  );
}
