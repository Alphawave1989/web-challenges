import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";

export default function Volumes() {
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
    </>
  );
}
