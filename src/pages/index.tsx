import Head from "next/head";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex items-center py-4 px-6 bg-blue-p space-x-[1.5em] ">
          <BsGithub size={35} color="#fff" />
          <input
            type="search"
            placeholder="Search or jump to..."
            className="px-4 py-2 rounded-md w-[80%]"
          />
        </section>
      </main>
    </>
  );
}
