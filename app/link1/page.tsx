const Link1Page = () => {
  return (
    <div style={{ marginLeft: '300px', marginTop: '50px' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '35px', color: 'black' }}>
        Email Templates
      </h1>
      <button
        style={{
          marginTop: '20px',
          padding: '5px 12px',
          fontSize: '16px',
          color: 'white',
          backgroundColor: '#464c5c',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '6px', 
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={{ width: '20px', height: '14px', marginRight: '8px' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
       Create New Service
      </button>
      <p style={{ marginTop: '10px', fontSize: '14px', color: 'gray' }}>
      
      </p>
    </div>
    
    
  );
};

export default Link1Page;
