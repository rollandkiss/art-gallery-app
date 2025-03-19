import Navigation from "@/components/Navigation";
import ArtGalleryList from "@/components/ArtGalleryList";

export default function Gallery({ newData }) {
  return (
    <>
      <li></li>
      <ArtGalleryList newData={newData} />
      <Navigation />
    </>
  );
}
