import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import Link from "next/link";
import styled from "styled-components";

const Body = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
  /* margin: 0; */
  /* margin: 1; */
  padding: 1.5rem;
`;

const H1 = styled.h1`
  margin-top: 0;
`;

export default function City() {
  const router = useRouter();

  if (!router.query) {
    return null;
  }
  const { slug } = router.query;
  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return null;
  }

  return (
    <Body>
      <H1>{city.name}</H1>
      <p>{city.description}</p>
      <p>
        {city.population}
        {" People"}
      </p>
      <p>
        <Link href="/cities">Go to cities</Link>
      </p>
    </Body>
  );
}
