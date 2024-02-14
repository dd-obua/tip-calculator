const BillInput = ({ bill, onSetBill }) => {
  const handleChange = (e) => onSetBill(Number(e.target.value));

  return (
    <p>
      How much was the bill?
      <input type="text" placeholder="Bill value" value={bill} onChange={handleChange} />
    </p>
  );
};

export default BillInput;
