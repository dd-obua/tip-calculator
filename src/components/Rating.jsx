const Rating = ({ children }) => {
  return (
    <p>
      {children}
      <select>
        <option>Dissatisfied 0%</option>
        <option>It was okay 5%</option>
        <option>It was good 10%</option>
        <option>Absolutely amazing 10%</option>
      </select>
    </p>
  );
};

export default Rating;
