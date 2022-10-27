import { useEffect, useState } from "react";
import GlobalStyle from './Theme/globalStyle';
import Wrapper from "./Components/Wrapper/Wrapper";
import Message from "./Components/Message/Message";
import Timer from "./Components/Timer/Timer";

function App() {

  const [showMessage, setShowMessage] = useState(false);
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [cardOne, setCardOne] = useState('');
  const [cardTwo, setCardTwo] = useState('');
  const [message, setMessage] = useState('');
  const [clearedCards, setClearedCards] = useState([]);

  useEffect(() => {
    setShowMessage(true);
  }, []);

  useEffect(() => {
    if (cardTwo !== '' && cardOne === cardTwo) {
      setMessage('yay');
    } else if (cardTwo !== '' && cardOne !== cardTwo) {
      setMessage('boo');
    };
  }, [cardTwo])

  useEffect(() => {
    if (clearedCards.length >= 6) {
      setMessage('good job!');
      setStart(false);
      setEnd(true);
    } else {
      return;
    }
  });

  return (
    <>
      <GlobalStyle />
      {(message || showMessage) && (
        <Message
          showMessage={showMessage}
          setShowMessage={setShowMessage}
          setStart={setStart}
          setEnd={setEnd}
          message={message}
          start={start}
          end={end}
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
