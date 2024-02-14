import BillInput from './BillInput';
import Rating from './Rating';
import Output from './Output';
import Reset from './Reset';
import { useState } from 'react';

const App = () => {
  const [bill, setBill] = useState('');

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <Rating>How did you like the service?</Rating>
      <Rating>How did your friend like the service?</Rating>
      <Output />
      <Reset />
    </div>
  );
};

export default App;
