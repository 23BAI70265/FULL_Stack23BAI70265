import './App.css';
import { useState, useRef } from 'react';
import Header from './header';


function App() {
  const [count, setCount] = useState(0) ;

  const [userName, setuserName] = useState("") ;
  

  const handleButtonClick = () => {
    setCount(count + 1) ;
  }
  const handleButtonClick2 = () => {
    setCount(count - 1) ;
  }

  return (

    <div className='container'>
      <p className = 'text'>{count}</p>
      <button onClick = {handleButtonClick} className = 'btn'>Increment</button>
      <button onClick = {handleButtonClick2} className = 'btn-2'>Decrement</button>
      <input type="text" value={userName} onChange={(e) => setuserName(e.target.value)} placeholder="Enter the user name"/>   
      <Header user = {userName}></Header>
    </div>
  );
}

export default App;
