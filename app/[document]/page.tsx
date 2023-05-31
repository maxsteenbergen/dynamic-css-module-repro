"use client";
import dynamic from "next/dynamic";

export default function Page({ params }) {
  const DynamicMDXComponent = dynamic(
    () => import(`./${params.document}.mdx`)
  );

  return <DynamicMDXComponent />;
};
