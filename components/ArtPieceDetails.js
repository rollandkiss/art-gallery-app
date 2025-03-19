import Image from "next/image";

export default function ArtPieceDetails({
  key,
  artworkSource,
  artworkName,
  artworkAltText,
  artworkArtist,
  artworkYear,
  artworkGenre,
}) {
  return (
    <li key={key}>
      <p>{artworkName}</p>
      <Image src={artworkSource} alt={artworkAltText} />
      width={400}
      height={400}
      <p>Artist: {artworkArtist}</p>
      <p>Year: {artworkYear}</p>
      <p>Genre: {artworkGenre}</p>
    </li>
  );
}
