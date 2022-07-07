import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import GuessResult from './components/GuessResult';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setCheckStatus } from './store';

// Set default range of generator using default parameter syntax
function randomGuessNumber(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const dispatch = useDispatch();
  const checkStatus = useSelector((state: RootState) => state);

  const [userGuess, setUserGuess] = useState('');
  const [guess, setGuess] = useState(0);

  useEffect(() => {
    setGuess(randomGuessNumber())
  }, []);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setUserGuess(evt.target.value);
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const userGuessNumber = Number(userGuess);

    if (Number.isNaN(userGuessNumber)) {
      return
    }

    if (guess > userGuessNumber) {
      dispatch(setCheckStatus('more'));
    }
    else if (guess < userGuessNumber) {
      dispatch(setCheckStatus('less'));
    }
    else {
      dispatch(setCheckStatus('win'));

      setTimeout(() => {
        dispatch(setCheckStatus('standby'));
        setUserGuess('')
      }, 5000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="App">
      <Input
        type="number"
        value={userGuess}
        onChange={handleChange}
        required
        min="0"
        max="100"
        withLabel="Enter number from range 0 to 100"
        id="guess-input"
      />
      <GuessResult checkStatus={checkStatus} />
    </form>
  );
}

export default App;
