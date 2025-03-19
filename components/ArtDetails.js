import Image from "next/image";
import Link from "next/link";

export default function ArtDetails({ dataObject, width, height }) {
  return (
    <>
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
