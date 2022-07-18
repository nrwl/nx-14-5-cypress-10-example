import { ClapResponse } from '@cypress-test/api-interfaces';
import { useEffect, useState } from 'react';
import { ClapCounter } from './clap-counter';

async function getClaps(): Promise<number> {
  const result: ClapResponse = await (await fetch('/clap-count')).json();
  return result.clapCount;
}

async function clap(): Promise<number> {
  const result: ClapResponse = await (
    await fetch('/clap', { method: 'post' })
  ).json();
  return result.clapCount;
}

export const App = () => {
  const [clapCount, setClapCount] = useState<number | undefined>(undefined);

  useEffect(() => {
    getClaps().then(setClapCount);
  }, []);

  return (
    <ClapCounter
      clapCount={clapCount}
      clap={() => {
        clap().then(setClapCount);
      }}
    />
  );
};

export default App;
