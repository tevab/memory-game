import { useEffect, useState } from "react";
import GlobalStyle from './Theme/globalStyle';
import Wrapper from "./Components/Wrapper/Wrapper";
import Message from "./Components/Message/Message";
import Timer from "./Components/Timer/Timer";

function App() {

  const [showMessage, setShowMessage] = useState(false);
  const [beginMessage, setBeginMessage] = useState(true);
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [cardOne, setCardOne] = useState('');
  const [cardTwo, setCardTwo] = useState('');
  const [message, setMessage] = useState('');
  const [clearedCards, setClearedCards] = useState([]);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    setShowMessage(true);
  }, []);

  useEffect(() => {
    if (cardTwo !== '' && cardOne === cardTwo) {
      if (clearedCards.length >= 5) {
        setMessage('good job!');
        setStart(false);
        setEnd(true);
      } else {
        setMessage('yay');
      }
    } else if (cardTwo !== '' && cardOne !== cardTwo) {
      setMessage('boo');
    };
  }, [cardTwo])

  return (
    <>
      <GlobalStyle
        showMessage={showMessage}
        message={message}
        end={end}
      />
      {(message || showMessage) && (
        <Message
          showMessage={showMessage}
          setShowMessage={setShowMessage}
          setStart={setStart}
          setEnd={setEnd}
          message={message}
          start={start}
          end={end}
          setRestart={setRestart}
          beginMessage={beginMessage}
          setBeginMessage={setBeginMessage}
        />
      )}
      <Wrapper
        cardOne={cardOne}
        setCardOne={setCardOne}
        cardTwo={cardTwo}
        setCardTwo={setCardTwo}
        clearedCards={clearedCards}
        setClearedCards={setClearedCards}
        message={message}
        setMessage={setMessage}
      />
      <Timer
        start={start}
        end={end}
      />
    </>
  );
}

export default App;
