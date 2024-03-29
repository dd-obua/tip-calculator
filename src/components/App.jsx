import BillInput from './BillInput';
import Rating from './Rating';
import Output from './Output';
import Reset from './Reset';
import { useState } from 'react';

const App = () => {
  const [bill, setBill] = useState('');
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);

  const tip = bill * ((rating1 + rating2) / 2 / 100);

  const handleRest = () => {
    setBill('');
    setRating1(0);
    setRating2(0);
  };

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />

      <Rating rating={rating1} onSelect={setRating1}>
        How did you like the service?
      </Rating>

      <Rating rating={rating2} onSelect={setRating2}>
        How did your friend like the service?
      </Rating>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleRest} />
        </>
      )}
    </div>
  );
};

export default App;
