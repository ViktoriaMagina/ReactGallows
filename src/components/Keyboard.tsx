const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

interface KeyboardProps {
  incorrectNumber: string[];
  correctNumber: string[];
  addGuessLetter: (key: string) => void;
  disabled: boolean;
}

function Keyboard({
  incorrectNumber,
  correctNumber,
  addGuessLetter,
  disabled,
}: KeyboardProps) {
  return (
    <div className="keyboard">
      {KEYS.map((key, index) => {
        const isActive = correctNumber.includes(key);
        const isUnActive = incorrectNumber.includes(key);
        return (
          <button
            disabled={isActive || isUnActive || disabled}
            onClick={() => addGuessLetter(key)}
            key={index}
            className={`key ${isActive ? "active" : ""} ${
              isUnActive ? "unactive" : ""
            }`}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
