import React, { KeyboardEvent } from "react";
import wordsList from "./assets/wordsList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

import "./App.css";

const getNewWord = () => {
  return wordsList[Math.floor(Math.random() * wordsList.length)];
};

function App() {
  const [wordToGuess, setWordToGuess] = React.useState(getNewWord());
  const [guessLetter, setGuessLetter] = React.useState<string[]>([]);

  const incorrectNumber = guessLetter.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const correctNumber = guessLetter.filter((letter) =>
    wordToGuess.includes(letter)
  );

  let isLoser = incorrectNumber.length >= 6;
  let isWinner = wordToGuess
    .split("")
    .every((letter: string) => guessLetter.includes(letter));
  const clearGame = (e: any) => {
    if (e.keyCode !== 13) return;
    setGuessLetter([]);
    setWordToGuess(getNewWord());
  };

  const addGuessLetter = React.useCallback((key: string) => {
    if(!(isLoser||isWinner)){
      setGuessLetter((current) => [...current, key]);
    }
  }, [isLoser, isWinner, guessLetter])



  React.useEffect(() => {
    const handler = (e: any) => {
      const key = e.key;
      if (!(guessLetter.includes(key))) {
        if (!key.match(/^[a-z]$/)) return;
        e.preventDefault();
        addGuessLetter(key);
      };
    };
    document.addEventListener("keypress", handler);
    document.addEventListener("keypress", clearGame);
    return () => {
      document.removeEventListener("keypress", handler);
      document.removeEventListener("keypress", clearGame);
    };
  }, [guessLetter]);
  return (
    <div className="app">
      <div className="finally-text">
        {isWinner && "You are winner! Try again :)"}
        {isLoser && "Ooops! Try again :)"}
      </div>
      <HangmanDrawing numberOfGuese={incorrectNumber.length} />
      <HangmanWord
        wordToGuess={wordToGuess}
        guessLetter={guessLetter}
        disabled={isLoser || isWinner}
      />
      <Keyboard
        addGuessLetter={addGuessLetter}
        correctNumber={correctNumber}
        incorrectNumber={incorrectNumber}
        disabled={isLoser || isWinner}
      />
    </div>
  );
}

export default App;
