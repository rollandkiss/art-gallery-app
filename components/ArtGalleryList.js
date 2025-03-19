import useSWR from "swr";
import ArtPiecePreview from "./ArtPiecePreview";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ArtGalleryList() {
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
  return (
    <>
      <h1>Art Gallery</h1>
      <ul>
        {data.map((artwork) => (
          <ArtPiecePreview
            key={artwork.slug}
            artworkSource={artwork.imageSource}
            artworkName={artwork.name}
            artworkAltText={artwork.name}
            artworkArtist={artwork.artist}
            slug={artwork.slug}
          />
        ))}
      </ul>
    </>
  );
}
