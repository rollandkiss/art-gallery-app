import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtDetails({ dataObject, width, height }) {
  return (
    <>
      <FavoriteButton />
      <Link href={`/`}>Back to homepage</Link>
      <p>{dataObject.name}</p>
      <Image
        src={dataObject.imageSource}
        alt={dataObject.name}
        width={width}
        height={height}
      />
      <p>Artist: {dataObject.artist}</p>
      <p>Year: {dataObject.year}</p>
      <p>Genre: {dataObject.genre}</p>
    </>
  );
}
