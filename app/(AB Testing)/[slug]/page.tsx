import { fetchByPageSlug, fetchPages } from "@/app/action";
import ABTestingPage from "@/components/ABTesting/ABTestingPage";
import Header from "@/components/Header";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "@/app/page.module.css";
import React from "react";

const DynamicABTestingPage: React.FC<DynamicABTestingPageProps> = async ({
  params,
}) => {
  const data = await fetchByPageSlug({ slug: params?.slug });

  if (!data?.length) {
    notFound();
  }

  return (
    <>
      <Header title={data[0]?.title} />
      {/* <div>
        <p className={styles.description}>
          <Link href={"/"}> Home</Link>
        </p>
      </div> */}
      <div>
        <ABTestingPage posts={data?.[0]?.cardsCollection?.items} />
      </div>
    </>
  );
};

export default DynamicABTestingPage;

export const dynamicParams = true;
export async function generateStaticParams() {
  const data = await fetchPages();
  const posts = data?.map((el: { slug: string; title: string }) => ({
    slug: el?.slug,
  }));

  return posts;
}
