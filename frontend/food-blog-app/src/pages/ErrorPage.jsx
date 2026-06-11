import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
      fontFamily: `'Inter', sans-serif`
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>Something went wrong</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>We encountered an unexpected error while loading the page.</p>
      <pre style={{
        background: '#fff',
        padding: '1rem',
        borderRadius: '8px',
        maxWidth: '80%',
        overflowX: 'auto',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>{error?.message?.toString() || 'Unknown error'}</pre>
    </div>
  );
}
