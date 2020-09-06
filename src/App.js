import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const startPad = (num) => {
    if(num < 10) {
      return '0' + num;
    }

    return num;
  }

  useEffect(() => {
    setInterval(function(){
      const diff = Math.abs(new Date('1 Jan 2021') - new Date());
      setDays(Math.round(diff / (1000 * 3600 * 24)));
      setHours(Math.round(diff % (1000 * 3600 * 24) / (1000 * 3600)));
      setMinutes(startPad(Math.round(diff % (1000 * 3600) / (1000 * 60))));
      setSeconds(startPad(Math.round(diff % (1000 * 60) / 1000 )));
    }, 1000);
  }, []);

  return (
    <div className="app">
      <h1>CountDown</h1>

      <div className="countdown">
        <div className="box days">
          <h2>{days}</h2>
          <p>days</p>
        </div>
        <div className="box hours">
          <h2>{hours}</h2>
          <p>hours</p>
        </div>
        <div className="box minutes">
          <h2>{minutes}</h2>
          <p>minutes</p>
        </div>
        <div className="box seconds">
          <h2>{seconds}</h2>
          <p>seconds</p>
        </div>
      </div>
    </div>
  );
}

export default App;
