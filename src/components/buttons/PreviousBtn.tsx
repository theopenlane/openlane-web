export default function PreviousBtn({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button onClick={onClick} className={className}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="25"
          r="23.5"
          fill="white"
          stroke="#2CCBAB"
          stroke-width="2"
        />
        <path
          d="M28.375 32.75L20.625 25L28.375 17.25"
          stroke="#2CCBAB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
}
