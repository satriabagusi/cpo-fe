"use client";
// import { useState } from "react";
// import styles from "./page.module.css";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("aha");
  return (
    <main>
      test {page}
      <Button>tests</Button>
    </main>
  );
}
