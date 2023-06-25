import { useId } from "react";
import { useGameContext } from "../context/wordle";
import { DeleteIcon } from "./Icons";

export default function KeyBoard(): JSX.Element {
  const { exactAttempts, presentAttempts, allAttempts, onSelectKey } =
    useGameContext();

  const keyboardChars = ["qwertyuiop", "asdfghjklñ", "zxcvbnm"];

  return (
    <div className="hold-keyboard w-3/6 flex flex-col pt-[33px]">
      {keyboardChars.map((row, i) => (
        <div
          className={`flex justify-center gap-[9.5px] ${
            i === 0
              ? "mb-[9.5px]"
              : i === 1
              ? "mb-[9.5px] mr-[-30px]"
              : "ml-[-60px]"
          } `}
          key={i}
        >
          {row.split("").map((char, i) => {
            const bgColor = exactAttempts.includes(char)
              ? "bg-green text-white"
              : presentAttempts.includes(char)
              ? "bg-yellow text-white"
              : allAttempts.includes(char)
              ? "bg-gray6 text-white"
              : "bg-gray4";
            return (
              <button
                key={i}
                className={`flex box-key items-center justify-center uppercase ${bgColor}`}
                onClick={() => onSelectKey(char)}
              >
                {char}
              </button>
            );
          })}
        </div>
      ))}
      <div className={`relative`}>
        <button
          className={`flex absolute box-key big items-center justify-center uppercase bg-gray4`}
          onClick={() => onSelectKey("Enter")}
          style={{ top: "-51px", left: "22.5px" }}
        >
          Enter
        </button>
        <button
          className={`flex absolute box-key big items-center justify-center uppercase bg-gray4`}
          onClick={() => onSelectKey("Backspace")}
          style={{ top: "-51px", right: "82.5px" }}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
