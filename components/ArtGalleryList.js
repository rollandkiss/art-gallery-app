import useSWR from "swr";
import ArtPiecePreview from "./ArtPiecePreview";
import SpotLight from "./SpotLight";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ArtGalleryList({ props }) {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  //{slug: 'blue-and-red', artist: 'Jung-Hua Lui', name: 'Blue and Red', imageSource: 'https://example-apis.vercel.app/assets/art/blue-and-red.jpg', year: '2019', …}
  // key,
  // artworkSource,
  // artworkName,
  // artworkAltText,
  // artworkArtist,
  const randomValue = getRandomCard(data.length);

  return (
    <>
      <h1>Art Gallery</h1>
      <SpotLight
        key={data[randomValue].slug}
        artworkSource={data[randomValue].imageSource}
        artworkName={data[randomValue].name}
        artworkAltText={data[randomValue].name}
        artworkArtist={data[randomValue].artist}
      />
    </>
  );
}

function getRandomCard(max) {
  return Math.floor(Math.random() * max);
}
