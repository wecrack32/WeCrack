import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F2F2F2, #EAE4D5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '40px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          color: '#000000',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '28px',
          fontWeight: '600'
        }}>Welcome Back</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '15px',
              border: '2px solid #EAE4D5',
              borderRadius: '10px',
              fontSize: '16px',
              background: '#F2F2F2',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#B6B09F'}
            onBlur={(e) => e.target.style.borderColor = '#EAE4D5'}
          />

          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '15px 50px 15px 15px',
                border: '2px solid #EAE4D5',
                borderRadius: '10px',
                fontSize: '16px',
                background: '#F2F2F2',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#B6B09F'}
              onBlur={(e) => e.target.style.borderColor = '#EAE4D5'}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#B6B09F'
              }}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            onClick={handleLogin}
            style={{
              padding: '15px',
              background: 'linear-gradient(135deg, #000000, #B6B09F)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: '10px',
              transition: 'transform 0.2s'
            }}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Login
          </button>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '20px',
          color: '#B6B09F',
          fontSize: '14px'
        }}>
          Don't have an account? <span style={{ color: '#000000', cursor: 'pointer', fontWeight: '500' }}>Sign up</span>
        </div>
      </div>
    </div>
  );
}