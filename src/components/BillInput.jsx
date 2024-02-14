const BillInput = ({ bill, onSetBill }) => {
  return (
    <p>
      How much was the bill?
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </p>
  );
};

export default BillInput;
