// app/login/page.tsx
"use client"; // Ensure this is a Client Component

import { signIn } from "next-auth/react";

const LoginPage = () => {
  const handleLogin = () => {
    signIn("discord"); // Trigger Discord OAuth sign-in
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Login to Your Account</h1>
      <p>Please sign in with your Discord account to continue</p>
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          backgroundColor: "#7289da",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Login with Discord
      </button>
    </div>
  );
};

export default LoginPage;
