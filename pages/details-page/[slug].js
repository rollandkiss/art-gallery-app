import { useRouter } from "next/router";
import ArtDetails from "@/components/ArtDetails";

export default function DetailPage({ newData }) {
  const router = useRouter();
  const { slug } = router.query;

  const getDetails = newData.find((element) => slug === element.slug);

  return (
    <>
      <ArtDetails dataObject={getDetails} width={400} height={400} />
    </>
  );
}
