// LoginModal.tsx
import React from 'react';
import LoginPage from './LoginPage';

const loginModalStyles: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#87CEEB', // Celeste
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const loginFormStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const labelStyles: React.CSSProperties = {
  display: 'block',
  marginBottom: '8px',
  color: '#555',
};

const inputStyles: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  marginBottom: '16px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '16px',
};

const buttonStyles: React.CSSProperties = {
  backgroundColor: '#4caf50',
  color: '#fff',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
};

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  return (
    <div style={loginModalStyles}>
      <LoginPage />
      <div style={loginFormStyles}>
        <label htmlFor="username" style={labelStyles}>
          Usuario
        </label>
        <input type="text" id="username" style={inputStyles} />

        <label htmlFor="password" style={labelStyles}>
          Contraseña
        </label>
        <input type="password" id="password" style={inputStyles} />

        <button onClick={onClose} style={buttonStyles}>
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
