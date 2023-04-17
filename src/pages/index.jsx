import Anchor from "@/components/Anchor";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to dog</title>
        <meta name="keywords" content="Some, good, keywords"></meta>
      </Head>
      <h1>Hello from Home</h1>
      <Anchor href="/dogs/henry">Henry</Anchor>
    </>
  );
}
