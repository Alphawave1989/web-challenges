import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
console.log(getRandomElement(volumes));

export default function Volumes() {
  const router = useRouter(); // Klammern vergessen
  function handleRandomVolume(event) {
    const randomVolume = getRandomElement(volumes); // const hatte ich vergessen
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <h1>List of Volumes</h1>
      <ul>
        {volumes.map(({ color, title, slug }) => {
          return (
            <li key={color}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={handleRandomVolume}>Go to Random Volume</button>
    </>
  );
}
