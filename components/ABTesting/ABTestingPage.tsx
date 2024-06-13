"use client";
import { useEffect, useState } from "react";

export default function ABTestingPage() {
  const [abGroup, setAbGroup] = useState<string | null>(null);

  useEffect(() => {
    const group = document.cookie
      .split("; ")
      .find((row) => row.startsWith("ab_test_group="))
      ?.split("=")[1];
    setAbGroup(group || null);
  }, []);

  if (abGroup === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {abGroup === "even" ? (
        <div>
          <h1>Welcome to Group A</h1>
          <p>This is the content for even-numbered users.</p>
        </div>
      ) : (
        <div>
          <h1>Welcome to Group B</h1>
          <p>This is the content for odd-numbered users.</p>
        </div>
      )}
    </div>
  );
}
