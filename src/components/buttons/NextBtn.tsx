export default function NextBtn({
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
          strokeWidth="2"
        />
        <path
          d="M20.625 32.75L28.375 25L20.625 17.25"
          stroke="#2CCBAB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
