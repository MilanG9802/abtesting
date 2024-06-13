import ABTestingPage from "@/components/ABTesting/ABTestingPage";
import React from "react";

interface DynamicABTestingPageProps {
  params: {
    slug: string;
  };
}

const DynamicABTestingPage: React.FC<DynamicABTestingPageProps> = ({
  params,
}) => {
  return (
    <div>
      {/* DynamicABTestingPage : {params?.slug} */}
      <div>
        <ABTestingPage />
      </div>
    </div>
  );
};

export default DynamicABTestingPage;
