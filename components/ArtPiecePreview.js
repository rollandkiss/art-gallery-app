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
    <li>
      <p>{artworkName}</p>
      <Image
        src={artworkSource}
        alt={artworkAltText}
        width={200}
        height={200}
      />
      <p>{artworkArtist}</p>
      <Link href={`/details-page/${slug}`}>Hier steht Link dann</Link>
    </li>
  );
}
