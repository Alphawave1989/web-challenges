import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ turnAllLightsOff, turnAllLightsOn }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onclick={turnAllLightsOff}
        // type="button"
        // onClick={() => turnAllLightsOff((isOn = false))}

        // onClick={() => {
        //   console.log("Turn all lights off");
        // }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={turnAllLightsOn}

        // onClick={() => {
        //   console.log("Turn all lights on");
        // }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
