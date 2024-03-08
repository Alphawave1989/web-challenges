import Link from "next/link";
import { cities } from "../../lib/data";
import styled from "styled-components";

const StyledLink = styled.a`
  color: black;
  text-decoration: none; /* Add this line to remove default underline */
  cursor: pointer;
`;

export default function Cities() {
  return (
    <>
      <h1>Cities</h1>
      {cities.map((city) => (
        <li key={city.id}>
          <Link href={`cities/${city.slug}`}>
            <StyledLink>{city.name}</StyledLink>
          </Link>
        </li>
      ))}
    </>
  );
}
