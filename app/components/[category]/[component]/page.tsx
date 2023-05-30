"use client";

import dynamic from "next/dynamic";
import styles from "./page.module.css";

export default function Page({ params }) {
  const Component = dynamic(
    () => import(`../../../_components/${params.category}/${params.component}`)
  );
  return (
    <div className={styles.datasheet}>
      <Component />
    </div>
  );
}