import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
      <div className='landingPageContainer'>
          <nav>
              <div className='navHeader'>
                  <img src="/logo.jpeg" alt="logo" />
                  <h2>Wavely</h2>
              </div>
              <div className="navList">
                  <p>Join as Guest</p>
                  <p>Register</p>
                  <div role='button'>
                      <p>Login</p>
                  </div>
              </div>
          </nav>

          <div className='landingMainContainer'>
              <h1><span>Connect</span> with you loved ones</h1>
              <h3>Only with Wavely</h3>
              <h2>Anytime, anywhere</h2>
              <div role='button' className='btn'>
                  <Link className='btn-link' to = {"/auth"}>Get Started</Link>
              </div>
          </div>
    </div>
  )
}
