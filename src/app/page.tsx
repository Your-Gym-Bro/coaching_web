import React, { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("../firebase").then((firebase) => {
      const auth = firebase.getAuth();
      auth.onAuthStateChanged((user) => {
        setUser(user);
        setLoading(false);
      });
    });
  }, []);

  const handleSignIn = async () => {
    let provider;
    let auth;
    try {
      const firebase = await import("../firebase");
      provider = new firebase.GoogleAuthProvider();
      auth = firebase.getAuth();
      await firebase.signInWithPopup(auth, provider);
    } catch (error) {
      console.log(`Error ${error.code}: ${error.message}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="center">
        <button onClick={handleSignIn}>
          {user ? `Signed in as ${user.displayName}` : "Sign in with Google"}
        </button>
      </div>
    </main>
  );
}
