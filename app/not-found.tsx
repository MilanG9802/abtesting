import Header from "@/components/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header title={"Not found"} />
      <div>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </>
  );
}
