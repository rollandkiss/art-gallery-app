import useSWR from "swr";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ArtPiece() {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  //console.log(data);

  //{slug: 'blue-and-red', artist: 'Jung-Hua Lui', name: 'Blue and Red', imageSource: 'https://example-apis.vercel.app/assets/art/blue-and-red.jpg', year: '2019', …}

  return (
    <ul>
      {data.map((artwork) => (
        <li key={artwork.slug}>
          <p>{artwork.name}</p>
          <img
            src={artwork.imageSource}
            alt={artwork.name}
            width="200"
            height="200"
          ></img>
          <p>{artwork.artist}</p>
        </li>
      ))}
    </ul>
  );

  // return (
  //   <>
  //     <h1>Art Gallery</h1>
  //     <ul>
  //       <li>
  //         <p>Art Titel 1</p>
  //         <img src="art.png"></img>
  //         <p>Artist Name</p>
  //       </li>
  //       <li>
  //         <p>Art Titel 2</p>
  //         <img src="..."></img>
  //         <p>Artist Name</p>
  //       </li>
  //     </ul>
  //   </>
  // );
}
