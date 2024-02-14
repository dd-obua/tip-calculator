import BillInput from './BillInput';
import Rating from './Rating';
import Output from './Output';
import Reset from './Reset';
import { useState } from 'react';

const App = () => {
  const [bill, setBill] = useState('');
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />

      <Rating rating={rating1} onSelect={setRating1}>
        How did you like the service?
      </Rating>

      <Rating rating={rating2} onSelect={setRating2}>
        How did your friend like the service?
      </Rating>

      <Output bill={bill} />
      <Reset />
    </div>
  );
};

export default App;
