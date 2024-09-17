import React from 'react';
import Header from '../components/navbar/Navbar';  

const EmailHistory: React.FC = () => {
  return (
    <div>
      <Header />  {/* Header bileşenini kullan */}
      <h1>Email History</h1>
      <p>Here is where you can view the email history.</p>
    </div>
  );
};

export default EmailHistory;
