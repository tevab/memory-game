import { useState } from "react";
import Wrapper from "./Wrapper/Wrapper";

function App() {

  const [cardOne, setCardOne] = useState('');
  const [cardTwo, setCardTwo] = useState('');

  return (
    <Wrapper
      cardOne={cardOne}
      setCardOne={setCardOne}
      cardTwo={cardTwo}
      setCardTwo={setCardTwo}
    />
  );
}

export default App;
