interface HangmanWordProps {
  guessLetter: string[];
  wordToGuess: string;
  disabled: boolean;
}

function HangmanWord({ guessLetter, wordToGuess, disabled }: HangmanWordProps) {
  return (
    <div className="hangman-word">
      {wordToGuess.split("").map((letter, index) => {
        return (
          <span className="letter" key={index}>
            <span
              style={{
                visibility:
                  guessLetter.includes(letter) || disabled
                    ? "visible"
                    : "hidden",
                color:
                  disabled && !guessLetter.includes(letter) ? "red" : "black",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default HangmanWord;
