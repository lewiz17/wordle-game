import React, { useEffect, useState } from "react";
import { useGameContext } from "./context/wordle";
import WordRow from "./components/WordRow";
import KeyBoard from "./components/KeyBoard";
import Modal from "./components/Modal";
import Header from "./components/Header";

function App() {
  const {
    init,
    handleKeyup,
    attempts,
    wordChosen,
    currentAttempt,
    isWinner,
    isLostGame,
    winnerMatch,
    totalMatch,
    setTotalMatch,
    setWinnerMatch,
  } = useGameContext();

  const [modalState, setModalState] = useState({
    modalStats: false,
    modalInfo: false,
  });
  const REMAIN_MINS = 3;
  const [gameTime, setGameTime] = useState(REMAIN_MINS);
  const [remainingTime, setRemainingTime] = useState(gameTime * 60);

  const formatTime = () => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    if (remainingTime === 0) {
      setRemainingTime(gameTime * 60);
      initApp();
    }

    return () => clearInterval(interval);
  }, [remainingTime]);

  useEffect(() => {
    initApp();
    const firstTime = localStorage.getItem("firstTime");

    if (!firstTime) {
      handleModalInfo();
      localStorage.setItem("firstTime", JSON.stringify(true));
    }
  }, []);

  const initApp = () => {
    init();
  };

  useEffect(() => {
    !modalState.modalInfo && document.addEventListener("keyup", handleKeyup);

    return () => {
      document.removeEventListener("keyup", handleKeyup);
    };
  }, [attempts, currentAttempt, handleKeyup, modalState.modalInfo]);

  useEffect(() => {
    let timeoutId;
    (isWinner || isLostGame) && setTotalMatch(totalMatch + 1);
    isWinner && setWinnerMatch(winnerMatch + 1);

    if (isWinner || isLostGame) {
      timeoutId = setTimeout(handleModalStats, 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isWinner, isLostGame]);

  const handleModalStats = () => {
    setModalState((prevState) => ({
      ...prevState,
      modalStats: !modalState.modalStats,
    }));
  };

  const handleModalInfo = () => {
    setModalState((prevState) => ({
      ...prevState,
      modalInfo: !modalState.modalInfo,
    }));
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <Header handleInfo={handleModalInfo} handleStat={handleModalStats} />
      {attempts.map((_, i) => (
        <WordRow
          key={i}
          wordChosen={wordChosen}
          attempt={attempts[i]}
          isAttempted={i < currentAttempt}
        />
      ))}
      <KeyBoard />
      <Modal isOpen={modalState.modalInfo}>
        <h2>Como jugar</h2>
        <p>
          Adivina la palabra oculta en cinco intentos.
          <br />
          <br />
          Cada intento debe ser una palabra válida de 5 letras.
          <br />
          <br />
          Después de cada intento el color de las letras cambia para mostrar qué
          tan cerca estás de acertar la palabra.
        </p>
        <div className="info-content">
          <ul className="demo-word">
            <li className="green">G</li>
            <li>A</li>
            <li>T</li>
            <li>O</li>
            <li>S</li>
          </ul>
          <ul className="demo-word">
            <li>V</li>
            <li>O</li>
            <li className="yellow">C</li>
            <li>A</li>
            <li>L</li>
          </ul>
          <ul className="demo-word">
            <li>C</li>
            <li>A</li>
            <li>N</li>
            <li>T</li>
            <li className="gray">O</li>
          </ul>
        </div>
        <button onClick={handleModalInfo}>Jugar!</button>
      </Modal>

      <Modal isOpen={modalState.modalStats}>
        <h2>Estadisticas</h2>
        <div className="flex">
          <span>{totalMatch} Jugadas</span>
          <span>{winnerMatch} Victorias</span>
          {isLostGame && <p>La palabra es: {wordChosen}</p>}
          <p>Siguiente Palabra: {formatTime()}</p>
          <button onClick={handleModalStats} className="btn btn-green">
            Aceptar
          </button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
