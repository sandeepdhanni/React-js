import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "631057980452-h7tc98s0dqa4arpvcj80p1gbo0sjdfg3.apps.googleusercontent.com";

function GoogleAuth() {
  const onSuccess = (response) => {
    console.log("Login Success: currentUser:", response.profileObj);
    const token = response.tokenId;
    // Send token to backend for verification and JWT generation
    fetch('http://localhost:8080/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token })
    })
    .then(res => res.json())
    .then(data => {
      // Store JWT in localStorage or context
      localStorage.setItem("jwtToken", data.jwtToken);
    });
  };

  const onFailure = (response) => {
    console.log("Login failed: res:", response);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default GoogleAuth;
