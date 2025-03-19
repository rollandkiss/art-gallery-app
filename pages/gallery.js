import Navigation from "@/components/Navigation";
import ArtGalleryList from "@/components/ArtGalleryList";

export default function Gallery({ newData }) {
  return (
    <>
      <ArtGalleryList newData={newData} />
      <Navigation />
    </>
  );
}
