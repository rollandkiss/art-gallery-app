import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({
  slug,
  artworkSource,
  artworkName,
  artworkAltText,
  artworkArtist,
}) {
  return (
    <>
      <p>Artwork Name: {artworkName}</p>
      <Link href={`/details-page/${slug}`}>
        <Image
          src={artworkSource}
          alt={artworkAltText}
          width={200}
          height={200}
        />
      </Link>
      <p>Artist: {artworkArtist}</p>
    </>
  );
}
