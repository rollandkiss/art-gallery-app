import SpotLight from "./SpotLight";

export default function ArtGalleryList({ newData }) {
  const randomValue = getRandomCard(newData.length);

  return (
    <>
      <h1>Art Gallery</h1>
      <SpotLight
        slug={newData[randomValue].slug}
        artworkSource={newData[randomValue].imageSource}
        artworkName={newData[randomValue].name}
        artworkAltText={newData[randomValue].name}
        artworkArtist={newData[randomValue].artist}
      />
    </>
  );
}

function getRandomCard(max) {
  return Math.floor(Math.random() * max);
}
