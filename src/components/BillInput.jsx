import { useState } from 'react';

const BillInput = () => {
  const [bill, setBill] = useState(0);

  const handleChangeBill = (e) => setBill(Number(e.target.value));

  return (
    <p>
      How much was the bill?
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={handleChangeBill}
      />
    </p>
  );
};

export default BillInput;
