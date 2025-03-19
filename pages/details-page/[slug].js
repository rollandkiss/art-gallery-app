import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function DetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const URL = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const getDetails = data.find((elementX) => slug === elementX.slug);
  return (
    <>
      <Link href={"/"}>Zurück zur Gallerie</Link>

      <p>{getDetails.name}</p>
      <Image
        src={getDetails.imageSource}
        alt={getDetails.name}
        width={200}
        height={200}
      />
      <p>{getDetails.artist}</p>
      <p>{getDetails.year}</p>
      <p>{getDetails.genre}</p>
    </>
  );
}
