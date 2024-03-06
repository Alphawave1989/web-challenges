import styled from "styled-components";

export const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;

  ${({ $isBlack }) => ($isBlack ? "background: black;" : "background: green;")}

  &:hover {
    background-color: red;
  }
`;

// export default function BoxWithStyledComponents({ $isBlack }) {
//   return (
//     <div>
//       <StyledBox $isBlack={$isBlack}></StyledBox>
//     </div>
//   );
// }
