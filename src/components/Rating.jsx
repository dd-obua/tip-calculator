const Rating = ({ children }) => {
  return (
    <p>
      {children}
      <select>
        <option value="0">Dissatisfied 0%</option>
        <option value="5">It was okay 5%</option>
        <option value="10">It was good 10%</option>
        <option value="20">Absolutely amazing 10%</option>
      </select>
    </p>
  );
};

export default Rating;
