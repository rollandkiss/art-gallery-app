import ArtPiecePreview from "@/components/ArtPiecePreview";
import ArtGalleryList from "@/components/ArtGalleryList";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ArtPieceDetails({ artPiece }) {
  const router = useRouter();

    if (!artPiece) {
      return <p>Artwork not found</p>;

//   if (error) return <div>failed to load</div>;
//   if (isLoading) return <div>loading...</div>;

  return (
    <li key={key}>
      <h1>Title: {artwork.name}</h1>
      <Image src={artwork.imageSource} alt={artwork.name} />
      <p>Artist: {artwork.artist}</p>
      <p>Year: {artwork.year}</p>
      <p>Genre: {artwork.genre}</p>
      <button onClick={() => router.push("/")}>Back to Gallery</button>
    </li>
  );
  {
    console.log(artPiece);
  }
}
}