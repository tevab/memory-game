import { useEffect, useState } from "react";
import Wrapper from "./Wrapper/Wrapper";

function App() {

  const [cardOne, setCardOne] = useState('');
  const [cardTwo, setCardTwo] = useState('');
  const [message, setMessage] = useState('');
  const [clearedCards, setClearedCards] = useState([]);

  useEffect (() => {
    if (cardTwo !== '' && cardOne === cardTwo) {
      setMessage('yay');
    } else if (cardTwo !== '' && cardOne !== cardTwo) {
      setMessage('boo');
    };
  }, [cardTwo])

  useEffect(() => {
    if (clearedCards.length >= 6) {
      setMessage('good job!');
    } else {
      return;
    }
  });

  return (
    <>
      {message}
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
    </>
  );
}

export default App;
