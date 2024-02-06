import "@/styles/globals.css";
import { LanguageProvider } from '../contexts/LanguageContext';
import { ThemeProvider } from "../contexts/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Component {...pageProps} />;
      </LanguageProvider>
    </ThemeProvider>

  )


}
