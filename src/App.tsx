import { useEffect, useState } from "react";

type NameResp = { name: string };

export default function App() {
  const [greeting, setGreeting] = useState("loading...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/name")
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: NameResp = await res.json();
        setGreeting(`hello ${data.name}`);
      })
      .catch((e) => setError(e.message));
  }, []);

  if (error) return <p>failed: {error}</p>;
  return <h1>{greeting}</h1>;
}
