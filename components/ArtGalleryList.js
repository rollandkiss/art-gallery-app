import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtGalleryList({ newData }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <ul>
        {newData.map((element) => {
          return (
            <li key={element.slug}>
              <ArtPiecePreview
                slug={element.slug}
                artworkSource={element.imageSource}
                artworkName={element.name}
                artworkAltText={element.name}
                artworkArtist={element.artist}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
