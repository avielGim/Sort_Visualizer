import './App.css';
import { useState } from 'react';
import Header from './components/Header';

const App = () => {
  // speed - fast, normal, easy
  // insert numbers or random array
  // size of the array - big, medium, small
  const [sizeArr, setSize] = useState(50);
  const [minRnage, setRange] = useState(50);
  const [maxRange, setMax] = useState(50);
  const [speed, setSpeed] = useState(5);
  
  return (
    <div className="App">
      <Header 
        sizeOfArray={sizeArr}
        minimum={minRnage}
        maximum={maxRange}/>
      {/* heade */}
      {/* body where the sort are visual */}
    </div>
  );
}

export default App;
