"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import { dispatch } from "@/store";
import { setLoaded } from "@/store/reducer/loading";

export default function ABTestingPage({ posts }: { posts: Card[] }) {
  const [abGroup, setAbGroup] = useState<string | null>("null");

  useEffect(() => {
    const group = document.cookie
      .split("; ")
      .find((row) => row.startsWith("ab_test_group="))
      ?.split("=")[1];
    setAbGroup(group || null);
    dispatch(setLoaded(true));
  }, []);

  return (
    <div>
      {abGroup === "even" ? (
        <Card
          title={posts?.[0]?.title}
          description={posts?.[0]?.description}
          image={posts?.[0]?.thumbnail?.url}
          color="black"
        />
      ) : abGroup === "odd" ? (
        <Card
          title={posts?.[1]?.title}
          description={posts?.[1]?.description}
          image={posts?.[1]?.thumbnail?.url}
          color="grey"
        />
      ) : (
        <Card title="" description="" image="" loading />
      )}
    </div>
  );
}
