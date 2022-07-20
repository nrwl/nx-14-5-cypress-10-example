export interface ClapCounterProps {
  clapCount: number | undefined;
  clap: () => void;
}

export function ClapCounter({ clapCount, clap }: ClapCounterProps) {
  return (
    <>
      <button
        onClick={() => {
          clap();
        }}
      >
        <span role="img" aria-label="clap!">
          👏
        </span>
      </button>

      <div>
        {clapCount
          ? `${clapCount} clap${clapCount === 1 ? '' : 's'} so far!!!`
          : clapCount == null
          ? 'Loading...'
          : "No one's clapped yet"}
      </div>
    </>
  );
}

export default ClapCounter;
