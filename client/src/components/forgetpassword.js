import React from 'react'
import { Link } from 'react-router-dom';
export default function forgetpassword() {
    const handleSubmit = async (e) => {
    }
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className='login-box'>
                <h2 className='he2'>LOGIN</h2>
                <div className="input inputp">
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter Username" 
                      required
                     
                    />
                </div>

                <div className="input1 input">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Password" 
                      required
                     
                    />
                </div>

                <button type="submit">LOGIN</button>

                <div className="signup-link">
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </form>
        </div>
    );
}
