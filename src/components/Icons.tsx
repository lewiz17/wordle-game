export const InfoIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={27}
      height={27}
      fill="none"
      {...props}
    >
      <path
        fill="current"
        className="fill-icon"
        d="M27 13.5a13.5 13.5 0 1 1-27 0 13.5 13.5 0 0 1 27 0ZM9.274 10.18h1.393c.233 0 .418-.19.449-.421.151-1.107.91-1.914 2.264-1.914 1.158 0 2.218.579 2.218 1.971 0 1.072-.632 1.564-1.629 2.314-1.136.825-2.035 1.788-1.97 3.353l.004.366a.422.422 0 0 0 .422.415h1.369a.422.422 0 0 0 .421-.422v-.177c0-1.212.461-1.564 1.705-2.508 1.028-.78 2.1-1.648 2.1-3.47 0-2.549-2.154-3.78-4.512-3.78-2.138 0-4.48.995-4.64 3.857a.4.4 0 0 0 .406.417Zm3.924 10.873c1.03 0 1.736-.665 1.736-1.564 0-.932-.708-1.586-1.736-1.586-.986 0-1.703.654-1.703 1.586 0 .9.717 1.564 1.705 1.564h-.002Z"
      />
    </svg>
  );
};

export const StatIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={36}
      fill="none"
      {...props}
    >
      <rect
        width={29.613}
        height={24}
        x={4.935}
        y={6}
        fill="current"
        className="fill-icon"
        rx={2}
      />
      <path
        stroke="current"
        className="stroke-background"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M13.161 15v9M19.742 18v6M26.323 12v12"
      />
    </svg>
  );
};

export const DeleteIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="current"
      className="fill-foreground"
      d="m9.95 4.316 3.637 3.464 3.637-3.464 1.1 1.156-3.58 3.41 3.58 3.41-1.1 1.155-3.637-3.464-3.637 3.464-1.1-1.155 3.58-3.41-3.58-3.41 1.1-1.156Z"
    />
    <path
      fill="current"
      className="fill-foreground"
      fillRule="evenodd"
      d="M6.686.906a.957.957 0 0 0-.755.37L.47 8.294a.957.957 0 0 0 0 1.176l5.46 7.018c.18.233.46.37.755.37h14.917a.957.957 0 0 0 .957-.957V1.863a.957.957 0 0 0-.957-.957H6.686Zm-4.65 7.976 4.962-6.38h13.967v12.76H6.998l-4.963-6.38Z"
      clipRule="evenodd"
    />
  </svg>
);
