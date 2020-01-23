import React from 'react';
import Calculator from './components/Calcutator/Calculator'
import './App.css';

function App() {
  return (
    <div className="App">
     <div>IOS Calculator </div>
     <div className='calcContainer'>
       <Calculator/>
     </div>
    </div>
  );
}

export default App;
