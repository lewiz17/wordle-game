export default function WordRow({
  isAttempted,
  attempt,
  wordChosen,
}: {
  isAttempted: boolean;
  attempt: string;
  wordChosen: string;
}): JSX.Element {
  return (
    <div className="mb-[11px] grid grid-cols-5 gap-[11px]">
      {new Array(5).fill(0).map((_, i) => {
        const bgColor = !isAttempted
          ? "bg-gray2 "
          : attempt[i] === wordChosen[i]
          ? "animate-flip bg-green text-white"
          : wordChosen.includes(attempt[i])
          ? "animate-flip bg-yellow text-white"
          : "bg-gray text-white";

        return (
          <div
            className={`flex box-item items-center justify-center font-bold uppercase ${bgColor}`}
            key={i}
            data-attempt={attempt}
          >
            {attempt[i]}
          </div>
        );
      })}
    </div>
  );
}
