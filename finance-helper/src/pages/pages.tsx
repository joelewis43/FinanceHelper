import React from 'react';

// Define a common interface for your page props (optional, but good practice)
interface PageProps {
  // You can add common props here if needed, e.g., user authentication info
}

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

// Error Page
const ErrorPage: React.FC<PageProps> = () => {
  return (
    <div className="App">
      <h2>Error</h2>
      <p>Add error details here.</p>
    </div>
  );
};


export { BudgetPage, InvestmentsPage, ErrorPage };
export { type PageProps };