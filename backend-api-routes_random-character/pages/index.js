import useSWR from "swr";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return "Error ist da ";
  if (isLoading) return "loading...";

  return (
    <section>
      <h2>{data.firstName}</h2>
      <p>{data.lastName}</p>
      <p>{data.age}</p>
      <p>{data.twittername}</p>
      <p>{data.geohash}</p>
    </section>
  );
}
