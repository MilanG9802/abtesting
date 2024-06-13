"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import { dispatch } from "@/store";
import { setLoaded } from "@/store/reducer/loading";

export default function ABTestingPage() {
  const [abGroup, setAbGroup] = useState<string | null>("null");

  useEffect(() => {
    const group = document.cookie
      .split("; ")
      .find((row) => row.startsWith("ab_test_group="))
      ?.split("=")[1];
    setAbGroup(group || null);
    dispatch(setLoaded(true));
  }, []);

  // if (abGroup === null) {
  //   return null;
  // }

  return (
    <div>
      {abGroup === "even" ? (
        <Card
          title="Welcome to Group A"
          description="This is the content for even-numbered users."
          image="https://cdn.britannica.com/37/154237-050-A76A506D/blue-peafowl-tail-Indian-peacock-courtship-displays.jpg"
          color="black"
        />
      ) : abGroup === "odd" ? (
        <Card
          title="Welcome to Group B"
          description="This is the content for odd-numbered users."
          image="https://t3.ftcdn.net/jpg/05/56/88/18/360_F_556881864_T6KNWit9nKkRcgo7543KQQDJfIDvtocG.jpg"
          color="grey"
        />
      ) : (
        <Card title="" description="" image="" loading />
      )}
    </div>
  );
}