'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; 

const Link1Page: React.FC = () => {
  const router = useRouter(); 

  const handleCreateTemplate = () => {
    router.push('/create-template'); 
  };

  return (
    <div style={{ marginLeft: '300px', marginTop: '50px' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '35px', color: 'black' }}>
        Email Templates
      </h1>
      <button
        onClick={handleCreateTemplate}
        style={{
          padding: '5px 12px',
          fontSize: '16px',
          color: 'white',
          backgroundColor: '#464c5c',
          borderRadius: '6px',
          marginTop: '20px',
        }}
      >
        Create New Template
      </button>
    </div>
  );
};

export default Link1Page;
