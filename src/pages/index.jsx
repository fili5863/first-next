import Anchor from "@/components/Anchor";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* The Head tag allows us to change the original head on all the pages aswell as the metatext */}
      <Head>
        <title>Welcome to dog</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
      </Head>
      <h1>Hello from Home</h1>
      {/* We use Anchor instead of Link because the Link load all the stuff from all pages.. We don't want that */}
      <Anchor href="/dogs/henry">Henry</Anchor>
    </>
  );
}
