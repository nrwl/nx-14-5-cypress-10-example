export interface ClapCounterProps {
  clapCount: number | undefined;
  clap: () => void;
}

export const ClapCounter = ({ clapCount, clap }: ClapCounterProps) => (
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
