import { ReactNode, useEffect, useState } from "react";
import { useGameContext } from "../context/wordle";
import Header from "./Header";
import WordRow from "./WordRow";
import KeyBoard from "./KeyBoard";
import Modal from "./Modal";

const MainGame: React.FC = () => {
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
  const REMAIN_MINS = 5;
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
          <span className="sub">Ejemplos:</span>
          <ul className="demo-word">
            <li className="green">G</li>
            <li>A</li>
            <li>T</li>
            <li>O</li>
            <li>S</li>
          </ul>
          <p className="line-text">
            La letra <strong>G</strong> está en la palabra y en la posición
            correcta.
          </p>
          <ul className="demo-word">
            <li>V</li>
            <li>O</li>
            <li className="yellow">C</li>
            <li>A</li>
            <li>L</li>
          </ul>
          <p className="line-text">
            La letra <strong>C</strong> está en la palabra pero en la posición
            incorrecta.
          </p>
          <ul className="demo-word">
            <li>C</li>
            <li>A</li>
            <li>N</li>
            <li>T</li>
            <li className="gray">O</li>
          </ul>
          <p className="line-text">
            La letra <strong>O</strong> no está en la palabra.
          </p>
          <p className="mb-[31px]">
            Puede haber letras repetidas. Las pistas son independientes para
            cada letra.
          </p>
          <p className="flex items-center justify-center h-[52px] mb-[34px]">
            ¡Una palabra nueva cada 5 minutos!
          </p>
        </div>
        <div className="center-full">
          <button className="button uppercase " onClick={handleModalInfo}>
            ¡Jugar!
          </button>
        </div>
      </Modal>

      <Modal isOpen={modalState.modalStats} type="stats">
        <h2>Estadísticas</h2>
        <div className="stats-content flex">
          <div className="flex justify-around">
            <div className="item-stat flex flex-col items-center">
              <span>{totalMatch}</span> Jugadas
            </div>
            <div className="item-stat flex flex-col items-center">
              <span>{winnerMatch}</span> Victorias
            </div>
          </div>
          {isLostGame && (
            <p className="flex justify-center items-center text-[19px] h-[52px] mt-[43px]">
              La palabra era:
              <strong className="uppercase ml-[5px]">{wordChosen}</strong>
            </p>
          )}
          <p
            className={`flex flex-col items-center ${
              isLostGame ? "mt-[7px]" : "mt-[57px]"
            }  mb-[30px] uppercase text-[19px]`}
          >
            <span className="flex items-center h-[52px]">
              Siguiente Palabra:
            </span>
            <strong className="text-[24px] font-[700]">{formatTime()}</strong>
          </p>
          <div className="center-full">
            <button className="button" onClick={handleModalStats}>
              Aceptar
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default MainGame;
