import React from 'react';

// Define a common interface for your page props (optional, but good practice)
interface PageProps {
  // You can add common props here if needed, e.g., user authentication info
}

// Spending Page
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

// Budget Page
const BudgetPage: React.FC<PageProps> = () => {
  return (
    <div className="App">
      <h2>Budget</h2>
      {/* Content specific to the Budget page */}
      <p>Manage your budget.</p>
      {/* Add more budget-related components and logic */}
    </div>
  );
};

// Investments Page
const InvestmentsPage: React.FC<PageProps> = () => {
  return (
    <div className="App">
      <h2>Investments</h2>
      {/* Content specific to the Investments page */}
      <p>Monitor your investments.</p>
      {/* Add more investments-related components and logic */}
    </div>
  );
};

export { SpendingPage, BudgetPage, InvestmentsPage }; // Export the pages