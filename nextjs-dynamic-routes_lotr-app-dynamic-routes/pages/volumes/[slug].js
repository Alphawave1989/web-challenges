import Link from "next/link";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volume() {
  const router = useRouter();
  console.log(router);

  const { slug } = router.query;

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return null;
  }

  const { title, description } = currentVolume;

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href="/volumes">Back to all Volumes</Link>
    </>
  );
}
