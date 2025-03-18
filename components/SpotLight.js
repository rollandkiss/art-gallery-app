import ArtPiecePreview from "./ArtPiecePreview";

export default function SpotLight({
  key,
  artworkSource,
  artworkName,
  artworkAltText,
  artworkArtist,
}) {
  return (
    <ArtPiecePreview
      key={key}
      artworkSource={artworkSource}
      artworkName={artworkName}
      artworkAltText={artworkAltText}
      artworkArtist={artworkArtist}
    />
  );
}
