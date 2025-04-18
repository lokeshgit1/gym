import React from 'react';

const Login = () => {
  return (
    <div style={container}>
      <div style={overlay}>
        <div style={formContainer}>
          <h2 style={header}>Sign In</h2>

          <input
            type="text"
            placeholder="Username *"
            style={input}
            required
          />
          <input
            type="password"
            placeholder="Password *"
            style={input}
            required
          />

          <div style={extras}>
            <label style={{ color: '#fff' }}>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" style={link}>Forgot password?</a>
          </div>

          <button type="submit" style={button}>SIGN IN</button>

          <p style={{ color: '#fff', marginTop: '1rem' }}>
            Not registered yet? <a href="#" style={link}>Create an Account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

// 💡 Styles

const container = {
  width: '100vw',
  height: '100vh',
  backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/08/27/87/60/1000_F_827876077_k0EWo3jSiWZPR8fRgsSbZFT9SkrozNuj.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const overlay = {
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const formContainer = {
  width: '90%',
  maxWidth: '400px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: '2rem',
  borderRadius: '12px',
  backdropFilter: 'blur(8px)',
  boxShadow: '0 0 20px rgba(0,0,0,0.3)',
  textAlign: 'center',
};

const header = {
  fontSize: '2rem',
  color: '#fff',
  marginBottom: '1.5rem',
};

const input = {
  padding: '12px',
  margin: '10px 0',
  width: '100%',
  border: 'none',
  borderRadius: '5px',
  fontSize: '1rem',
};

const extras = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '0.9rem',
  marginTop: '10px',
  marginBottom: '20px',
};

const button = {
  backgroundColor: '#FFA500',
  color: 'white',
  padding: '12px',
  border: 'none',
  borderRadius: '25px',
  fontSize: '1rem',
  cursor: 'pointer',
  width: '100%',
  transition: '0.3s',
};

const link = {
  color: '#fff',
  textDecoration: 'underline',
};

export default Login;
