import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';
import { useConsumer } from "../AuthContext";
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
          <ul>
            <li>
              <Link href="/login">Login component</Link>
            </li>
            <li>
              <Link href="/list">List component</Link>
            </li>

          </ul>
       </main>
    </>
  );
}
