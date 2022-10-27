import { useEffect, useState } from "react";
import Wrapper from "./Wrapper/Wrapper";

function App() {

  const [cardOne, setCardOne] = useState('');
  const [cardTwo, setCardTwo] = useState('');
  const [message, setMessage] = useState('');

  useEffect (() => {
    if (cardTwo !== '' && cardOne === cardTwo) {
      setMessage('yay');
    } else if (cardTwo !== '' && cardOne !== cardTwo) {
      setMessage('boo');
    };
  }, [cardTwo])

  return (
    <>
      {message}
      <Wrapper
        cardOne={cardOne}
        setCardOne={setCardOne}
        cardTwo={cardTwo}
        setCardTwo={setCardTwo}
      />
    </>
  );
}

export default App;
