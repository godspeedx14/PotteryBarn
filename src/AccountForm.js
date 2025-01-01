import React, { useState } from "react";
import "./AccountForm.css";

const AccountForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add sign-in logic here
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Add account creation logic here
  };

  return (
    <div className="account-page-container">
      <div className="top-section">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="#">Account</a> &gt;{" "}
          <a href="#">Login</a>
        </div>
        <h1>My Account</h1>
      </div>
      <div className="account-form-container">
        <div className="form-section">
          <h2>Sign in using your email</h2>
          <form onSubmit={handleSignIn}>
            <span>
              You can now sign into any of our family of brands using your
              account! If you don't have an account, create an account.
            </span>
            <br />
            <br />
            <span>Enter your phone number for OTP </span>
            <br />
            <br />
            <div className="form-group">
              <label htmlFor="mobile">
                <h3>MOBILE</h3>
              </label>
              <input type="tel" id="mobile" required />
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <h3>
                  <span>
                    BY PROCEEDING, I AGREE TO THE TERMS OF SERVICES & PRIVACY
                    POLICY.
                  </span>
                </h3>
              </label>
            </div>
            <div className="form-group">
              <div className="captcha-placeholder">I'm not a robot</div>
            </div>
            <button type="submit" className="submit-button">
              Sign In
            </button>
          </form>
          <div className="form-footer">
            <a href="#" className="forgot-password">
              Forgotten your password?
            </a>
          </div>
        </div>

        <div className="form-section">
          <h2>Create an Account</h2>
          <form onSubmit={handleCreateAccount}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                />
                <span>I agree to the Terms of Service & Privacy Policy</span>
              </label>
            </div>
            <div className="form-group">
              <div className="captcha-placeholder">I'm not a robot</div>
            </div>
            <button type="submit" className="submit-button">
              Create an Account
            </button>
          </form>
          <div className="alert">
            Note: It may take a few days for us to process your request. We do
            not currently support international addresses with our accounts.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
