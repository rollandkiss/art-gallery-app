import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState, useEffect } from "react";

const fetcher = (url) => fetch(url).then((r) => r.json());

// function DataCollect() {
//   const URL = "https://example-apis.vercel.app/api/art";
//   const { data, error, isLoading } = useSWR(URL, fetcher);

//   if (error) return <div>failed to load</div>;
//   if (isLoading) return <div>loading...</div>;

//   return data;
// }

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(URL, fetcher);

  const [newData, setNewData] = useState([]);

  useEffect(() => {
    if (data) {
      const newData = data.map((element) => ({
        ...element,
        isFavorit: false,
      }));
      setNewData(newData);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  // console.log(newData);

  function handleFavorit(slug) {
    const favoriteArtwork = newData.find((element) => element.slug === slug);
    if (favoriteArtwork) {
      return newData.map((element) =>
        element.slug === slug
          ? { ...element, isFavorite: !element.isFavorite }
          : element
      );
    }
    // return [...newData, { slug, isFavorite: true }];
  }

  return (
    <>
      <Navigation />
      <GlobalStyle />
      <Component {...pageProps} newData={newData} />
    </>
  );
}
