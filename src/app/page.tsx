'use client';
import React, { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="center">
        <button onClick={handleSignIn}>
          {user ? `Signed in as ` : "Sign in with Google"}
        </button>
      </div>
    </main>

  );

  async function handleSignIn() {
    console.log("signing in");
  }
}
