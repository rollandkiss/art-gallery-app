import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const newData = data.map((element) => {
    return { ...element, isFavorit: false };
  });

  //{slug: 'blue-and-red', artist: 'Jung-Hua Lui', name: 'Blue and Red', imageSource: 'https://example-apis.vercel.app/assets/art/blue-and-red.jpg', year: '2019', …}
  return (
    <>
      <Navigation />
      <GlobalStyle />
      <Component {...pageProps} newData={newData} />
    </>
  );
}
