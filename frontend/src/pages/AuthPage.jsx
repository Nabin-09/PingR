
import '../styles/auth.css'
import { SignInButton } from '@clerk/clerk-react'
import React from 'react'


const AuthPage = () => {
  return <div className='auth-container'>
    <div className="auth-left">
      <div className="auth-hero">
        <div className="brand-container">
          <img src="./PingR.png" alt="Logo of PingR" className='brand-logo'/>
          <span className='brand-name'>PingR</span>
        </div>

        <div className="hero-title">Work in action! ✨</div>
        <p className='hero-subtitle'>
          Connect with teammates via secure , real time messaging. Experience uninterrupted
          collaboration with powerful features designed for modern teams.
        </p>

        <div className="features-list">
          <div className="feature-item">
            <span className="feature-icon">💬</span>
              <span>Real-Time Messaging</span>
            </div>
            <div className="feature-item">
            <span className="feature-icon">🎥</span>
              <span>Video Calls & Meetings</span>
            </div>
            <div className="feature-item">
            <span className="feature-icon">🔒</span>
              <span>Secure & Private</span>
            </div>
        </div>
        <SignInButton mode='modal'>
            <button className='cta-button'>
              Get Started with PingR
              <span className='button-arrow'>→</span>
            </button>
        </SignInButton>
      </div>
    </div>

    <div className="auth-right">
        <div className="auth-image-container">
            <img src="./BackgroundImage.png" className="auth-image" alt="Auth" />
            <div className="image-overlay"></div>
        </div>
    </div>



  </div>
}

export default AuthPage
