import Header from "@/components/Header";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header title="Home Page" />
      <main>
        <div className={styles.description}>
          Main
          <p>
            <Link href={"/ab-test-card"}> Test Component</Link>
          </p>
        </div>
      </main>
    </>
  );
}
