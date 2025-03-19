import ArtPiecePreview from "./ArtPiecePreview";

export default function SpotLight({
  slug,
  artworkSource,
  artworkName,
  artworkAltText,
  artworkArtist,
}) {
  return (
    <ArtPiecePreview
      slug={slug}
      artworkSource={artworkSource}
      artworkName={artworkName}
      artworkAltText={artworkAltText}
      artworkArtist={artworkArtist}
    />
  );
}
