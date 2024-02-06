import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {language} = useLanguage();
  const {theme} = useTheme();

  return (
    <>
     <div>Language:{language}</div>
     <div>Theme:{theme}</div>
      
    </>
  );
}
