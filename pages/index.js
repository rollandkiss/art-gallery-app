import ArtGalleryList from "@/components/ArtGalleryList";

export default function HomePage({ newData }) {
  return (
    <>
      <ArtGalleryList newData={newData} />
    </>
  );
}
