/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Oops! Something went wrong.</h1>
      <p style={{ color: '#777', marginBottom: '30px' }}>
        It seems like there's an error. Please try again or go back to the home page.
      </p>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          background: '#3490dc',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          outline: 'none',
        }}
        onClick={() => navigate('/')}
      >
        Back To Home
      </button>
    </div>
  );
};

export default Error;