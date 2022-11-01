import { useEffect, useState } from "react";
import GlobalStyle from './Theme/globalStyle';
import Wrapper from "./Components/Wrapper/Wrapper";
import Message from "./Components/Message/Message";
import Timer from "./Components/Timer/Timer";
import {successMessage, failMessage, finishMessage} from './Helpers/Messages'

function App() {

  const [showMessage, setShowMessage] = useState(true);
  const [beginMessage, setBeginMessage] = useState(true);
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [cardOne, setCardOne] = useState('');
  const [cardTwo, setCardTwo] = useState('');
  const [message, setMessage] = useState('');
  const [clearedCards, setClearedCards] = useState([]);
  const [timer, setTimer] = useState('');
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (cardTwo !== '' && cardOne === cardTwo) {
      if (clearedCards.length >= 5) {
        setMessage(finishMessage);
        setStart(false);
        setEnd(true);
      } else {
        setMessage(successMessage);
      }
    } else if (cardTwo !== '' && cardOne !== cardTwo) {
      setMessage(failMessage);
    };
  }, [cardTwo])

  return (
    <>
      <GlobalStyle
        message={message}
        end={end}
      />
      {(message || showMessage) && (
        <Message
          showMessage={showMessage}
          setShowMessage={setShowMessage}
          setStart={setStart}
          setEnd={setEnd}
          setMessage={setMessage}
          message={message}
          start={start}
          end={end}
          beginMessage={beginMessage}
          setBeginMessage={setBeginMessage}
          timer={timer}
          setReset={setReset}
          reset={reset}
          setClearedCards={setClearedCards}
        />
      )}
      <Wrapper
        beginningMessage={beginMessage}
        setStart={setStart}
        cardOne={cardOne}
        setCardOne={setCardOne}
        cardTwo={cardTwo}
        setCardTwo={setCardTwo}
        clearedCards={clearedCards}
        setClearedCards={setClearedCards}
        message={message}
        setMessage={setMessage}
        setReset={setReset}
        reset={reset}
      />
      <Timer
        start={start}
        end={end}
        setTimer={setTimer}
        reset={reset}
      />
    </>
  );
}

export default App;
