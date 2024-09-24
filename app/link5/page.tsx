'use client'; 

import React, { useEffect, useState } from 'react';

const Link5Page: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleRefresh = () => {
    window.location.reload();
  };

  const fetchData = async () => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT_HERE'); // Replace with your API endpoint
      if (!response.ok) throw new Error('Failed to fetch events');
      const data = await response.json();
      setEvents(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Events</h1>
      <div style={styles.dropdownContainer}>
        <select style={styles.dropdown}>
          <option value="">All Events</option>
          
          <option value="only-errors">Only Errors</option>
        </select>
        <button style={styles.updateButton} onClick={handleRefresh}>
          <img
            src="reload.png" 
            alt="Reload"
            style={styles.icon}
          />
        </button>
      </div>

      <div style={styles.headersContainer}>
        <div style={styles.headerColumn}>Created</div>
        <div style={styles.headerColumn}>API</div>
        <div style={styles.headerColumn}>Status</div>
        <div style={styles.headerColumn}>Response</div>
      </div>

      {loading ? (
        <div style={styles.noDataContainer}>
          <h4 style={styles.noDataTitle}>Loading...</h4>
        </div>
      ) : error ? (
        <div style={styles.noDataContainer}>
          <h4 style={styles.noDataTitle}>{error}</h4>
        </div>
      ) : events.length === 0 ? (
        <div style={styles.noDataContainer}>
          <h4 style={styles.noDataTitle}>The event list is empty</h4>
        </div>
      ) : (
        events.map((event, index) => (
          <div key={index} style={styles.headersContainer}>
            <div style={styles.headerColumn}>{event.created}</div>
            <div style={styles.headerColumn}>{event.api}</div>
            <div style={styles.headerColumn}>{event.status}</div>
            <div style={styles.headerColumn}>{event.response}</div>
          </div>
        ))
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginLeft: '300px',
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '35px',
    color: 'black',
  },
  dropdownContainer: {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  dropdown: {
    padding: '7px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    minWidth: '200px',
  },
  updateButton: {
    marginLeft: '10px',
    padding: '5px',
    borderRadius: '50%',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  },
  icon: {
    width: '16px', 
    height: '16px',
  },
  headersContainer: {
    display: 'flex',
    fontWeight: 'bold',
    borderBottom: '2px solid #ccc',
    marginTop: '20px',
  },
  headerColumn: {
    flex: 1,
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
  },
  noDataContainer: {
    marginTop: '20px',
    textAlign: 'center',
    color: '#666',
  },
  noDataTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
};

export default Link5Page;