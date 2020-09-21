import React , {useState} from 'react';
import Parent from './Parent';
import CounterContext from './CounterContext';
import './App.css';

function App() {
  let countState = useState (0);
  //let [count, countState] = useState(20)
  return (
    
    <CounterContext.Provider value = {countState}>
      <div >
      
      <h1> PIAIC Boot Camp 2020 - Class 05 - Context API createContext useContext</h1>
      <h1> Student Name : Muhammad Javaid Nawab overseas</h1>
      <h3> Github Repo: https://github.com/Mjavaidnawab/bc20k-class05  </h3>
      <h3> Surge URL  : http://bc20k-class05.surge.sh/</h3>    

        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
