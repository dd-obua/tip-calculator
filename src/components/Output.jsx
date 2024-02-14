const Output = ({ bill, tip }) => {
  return (
    <p>
      <strong>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </strong>
    </p>
  );
};

export default Output;
