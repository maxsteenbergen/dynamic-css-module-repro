"use client";
import dynamic from "next/dynamic";

export default function Page({ params }) {
  const DynamicMDXComponent = dynamic(
    () => import(`./${params.document}.mdx`)
  );

  console.log(params)
  // return <h1>hello</h1>
  return <DynamicMDXComponent />;
}