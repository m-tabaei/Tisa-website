"use client";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <Layout showFooter={false}>
      <Hero />
    </Layout>
  );
}
