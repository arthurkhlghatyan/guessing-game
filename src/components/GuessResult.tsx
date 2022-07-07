import Confetti from 'react-confetti'

interface GuessResultProps {
  checkStatus: string;
}

function GuessResult({ checkStatus }: GuessResultProps) {
  if (checkStatus === 'win') {
    return (
      <>
        <Confetti />
        <div>You win! New guess will be generated in 5 seconds</div>
      </>
    );
  }

  if (checkStatus === 'less') {
    return (
      <div>
        Enter smaller number
      </div>
    );
  }

  if (checkStatus === 'more') {
    return (
      <div>
        Enter bigger number
      </div>
    )
  }

  return null;
}

export default GuessResult;