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
        <h1 className="text-4xl font-bold">Welcome to the app</h1>
        <p className="text-xl">Sign in to continue</p>
        <div color="red" className="flex flex-1">
          // draw 100w x 100h red box
          <div className="w-100 h-100 bg-red-500"></div>
        </div>
        <button onClick={handleSignIn}>
          {user ? `Signed in as ` : "Sign in with Google check this out"}
        </button>
      </div>
    </main>

  );

  async function handleSignIn() {
    console.log("signing in");
  }
}
