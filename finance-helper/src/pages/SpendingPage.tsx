import { PageProps } from './pages';


const SpendingPage: React.FC<PageProps> = () => {
  return (
    <div className="App">
      <h2>Spending</h2>
      {/* Content specific to the Spending page */}
      <p>Track your expenses here.</p>
      {/* Add more spending-related components and logic */}
    </div>
  );
};

export default SpendingPage;