export default function PreviousBtn({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        ${className}
        relative inline-flex items-center justify-center
        w-12 h-12
        text-color-primary
        group
        transition-transform duration-200
        hover:scale-105
        focus:outline-none
      `}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`
          w-full h-full
          transition-colors duration-300
          group-hover:text-color-secondary
        `}
      >
        <circle
          cx="25"
          cy="25"
          r="23.5"
          className="fill-current-reverse"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M28.375 32.75L20.625 25L28.375 17.25"
          className={`
            stroke-current
            stroke-2
            stroke-linecap-round
            stroke-linejoin-round
            transform transition-transform duration-300
            translate-x-0
            group-hover:-translate-x-1
          `}
        />
      </svg>
    </button>
  );
}
