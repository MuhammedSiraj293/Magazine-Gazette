'use client'
import HomePage from "./HomePage";
import DataProvider from "@/context/DataProvider";

export default function Home() {



  return (
    <>
      <DataProvider>
        <HomePage />
      </DataProvider>
    </>
  );
}
