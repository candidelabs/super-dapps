import React from 'react';

const MobileMessage = () => {
  const redirectToWebsite = () => {
    window.location.href = 'https://candidewallet.com';
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}> 😞 Sorry, this website is not available on mobile devices.</h1>
      <p style={styles.paragraph}>
        Please visit us from a desktop or tablet for the best experience.
      </p>
      <button style={styles.button} onClick={redirectToWebsite}>
        Back to Candide
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    maxWidth: '300px', // Adjust the width as needed for your design
    margin: '0 auto',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
  },
  paragraph: {
    fontSize: '16px',
    color: '#666',
    marginTop: '10px',
  },
  button: {
    backgroundColor: '#0074d9',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    marginTop: '20px',
    cursor: 'pointer',
  },
};

export default MobileMessage;
