'use client'; 

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Link6Page: React.FC = () => {
  const [data, setData] = useState({
    labels: [], 
    datasets: [
      {
        label: 'Received Emails', 
        data: [], 
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  const handleRefresh = () => {
    window.location.reload();
  };

  const fetchData = async () => {
    try {
      const response = await fetch('/api/getStatistics'); 
      const result = await response.json();

 
      setData({
        labels: result.dates, 
        datasets: [
          {
            ...data.datasets[0],
            data: result.counts,
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Email Received Statistics',
      },
    },
    scales: {
      y: {
        type: 'linear' as const, 
        title: {
          display: true,
          text: '# of Emails',
        },
        ticks: {
          beginAtZero: false, 
          stepSize: 1, 
          callback: (value: string | number) => value, 
        },
      },
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Email Statistics</h1>
      <div style={styles.dropdownContainer}>
        <select style={styles.dropdown}>
          <option value="">Daily</option>
          <option value="option1">Weekly</option>
          <option value="option2">Monthly</option>
        </select>
        <button style={styles.updateButton} onClick={handleRefresh}>
          <img
            src="/reload.png"
            alt="Reload"
            style={styles.icon}
          />
        </button>
      </div>
      <div style={styles.chartContainer}>
        <Bar data={data} options={options} />
      </div>
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
  chartContainer: {
    marginTop: '40px',
    maxWidth: '800px', 
    height: '400px', 
    margin: '0 auto',
  },
};

export default Link6Page;
