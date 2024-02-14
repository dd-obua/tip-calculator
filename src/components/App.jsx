import Bill from './BillInput';
import Rating from './Rating';
import Output from './Output';
import Reset from './Reset';

const App = () => {
  return (
    <div>
      <Bill />
      <Rating>How did you like the service?</Rating>
      <Rating>How did your friend like the service?</Rating>
      <Output />
      <Reset />
    </div>
  );
};

export default App;
