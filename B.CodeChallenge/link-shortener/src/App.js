import logo from './logo.svg';
import './App.css';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("")
  const [typeLink, setTypeLink] = useState(0)
  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} setTypeLink={setTypeLink}/>
      <LinkResult inputValue={inputValue} typeLink={typeLink}/>
    </div>
  );
}

export default App;
