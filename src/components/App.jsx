import Bill from './Bill';
import Rating from './Rating';

const App = () => {
  return (
    <div>
      <Bill />
      <Rating>How did you like the service?</Rating>
      <Rating>How did your friend like the service?</Rating>
      <p>
        <strong>You pay $100 ($100 + $0 tip)</strong>
      </p>
      <button>Reset</button>
    </div>
  );
};

export default App;
