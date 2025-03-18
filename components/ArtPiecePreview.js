import Image from "next/image";

export default function ArtPiecePreview({
  key,
  artworkSource,
  artworkName,
  artworkAltText,
  artworkArtist,
}) {
  return (
    <li key={key}>
      <p>{artworkName}</p>
      <Image
        src={artworkSource}
        alt={artworkAltText}
        width={200}
        height={200}
      />
      <p>{artworkArtist}</p>
    </li>
  );
}
