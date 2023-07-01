import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
  useEffect,
} from "react";

interface Words {
  words: string[];
}

interface GameContextProps {
  filteredWords: string[];
  wordChosen: string;
  attempts: string[];
  currentAttempt: number;
  isWinner: boolean;
  totalMatch: number;
  setTotalMatch: (value: number) => void;
  winnerMatch: number;
  setWinnerMatch: (value: number) => void;
  errorMsg: string;
  isLostGame: boolean;
  allAttempts: string[];
  exactAttempts: string[];
  presentAttempts: string[];
  init: () => void;
  onSelectKey: (value: string) => void;
  handleKeyup: (e: KeyboardEvent) => void;
}

const GameContext = createContext<GameContextProps | null>(undefined);

const WordleProvider = ({ children }: { children: ReactNode }) => {
  const [wordList, setWordList] = useState<Words>({ words: [] });
  const [wordChosen, setWordChosen] = useState<string>("");
  const [attempts, setAttempts] = useState<string[]>([]);
  const [currentAttempt, setCurrentAttempt] = useState<number>(0);
  const [totalMatch, setTotalMatch] = useState<number>(0);
  const [winnerMatch, setWinnerMatch] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    const fetchWordsData = async () => {
      try {
        const response = await fetch(`/words.json`);
        const data: Words = await response.json();
        setWordList(data);
      } catch (error) {
        console.error("Error loading words data:", error);
      }
    };

    fetchWordsData();
  }, []);

  const normalizeWord = (word: string): string => {
    return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filterWords = useCallback((words: string[]) => {
    return words
      .filter((word) => word.length === 5)
      .map((word) => normalizeWord(word));
  }, []);

  const filteredWords = filterWords(wordList.words as string[]);

  const isWinner = attempts[currentAttempt - 1] === wordChosen;

  const isLostGame =
    currentAttempt === 5 && attempts[currentAttempt - 1] !== wordChosen;

  const allAttempts = attempts.slice(0, currentAttempt).join("").split("");

  const exactAttempts = wordChosen
    .split("")
    .filter((letter, i) =>
      attempts.slice(0, currentAttempt).some((word) => word[i] === letter)
    );

  const presentAttempts = wordChosen
    .split("")
    .filter((letter) => allAttempts.includes(letter));

  const init = (): void => {
    setAttempts(new Array(5).fill(""));
    setWordChosen(getRandomWord());
    setCurrentAttempt(0);
  };

  const getRandomWord = (): string => {
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex];
  };

  const onSelectKey = (key): void => {
    if (isWinner || isLostGame) {
      return;
    }

    if (key === "Enter") {
      if (filteredWords.includes(attempts[currentAttempt])) {
        setCurrentAttempt((prevAttempt) => prevAttempt + 1);
      } else {
        setErrorMsg("La palabra no existe!");
      }
    }

    if (key === "Backspace") {
      setAttempts((prevAttempts) => {
        const updatedAttempts = [...prevAttempts];
        updatedAttempts[currentAttempt] = updatedAttempts[currentAttempt].slice(
          0,
          -1
        );
        return updatedAttempts;
      });
      return;
    }

    if (attempts[currentAttempt].length < 5 && /^[A-z]$/i.test(key)) {
      setAttempts((prevAttempts) => {
        const updatedAttempts = [...prevAttempts];
        updatedAttempts[currentAttempt] =
          updatedAttempts[currentAttempt] + key.toLowerCase();
        return updatedAttempts;
      });
    }
  };

  const handleKeyup = (e: KeyboardEvent): void => {
    onSelectKey(e.key);
  };

  return (
    <GameContext.Provider
      value={{
        errorMsg,
        filteredWords,
        wordChosen,
        attempts,
        currentAttempt,
        isWinner,
        totalMatch,
        setTotalMatch,
        winnerMatch,
        setWinnerMatch,
        isLostGame,
        allAttempts,
        exactAttempts,
        presentAttempts,
        onSelectKey,
        init,
        handleKeyup,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = (): GameContextProps => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a WordleProvider");
  }
  return context;
};

export { WordleProvider, useGameContext };
