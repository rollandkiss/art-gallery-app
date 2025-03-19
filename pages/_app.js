import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navigation />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
