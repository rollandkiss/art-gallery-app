import ArtPiecePreview from "./ArtPiecePreview";

export default function SpotLight({ newData }) {
  const randomValue = getRandomCard(newData.length);

  return (
    <ArtPiecePreview
      slug={newData[randomValue]?.slug}
      artworkSource={newData[randomValue]?.imageSource}
      artworkName={newData[randomValue]?.name}
      artworkAltText={newData[randomValue]?.name}
      artworkArtist={newData[randomValue]?.artist}
    />
  );
}

function getRandomCard(max) {
  return Math.floor(Math.random() * max);
}
