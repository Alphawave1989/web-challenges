import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  handleToggleAllOn,
  handleToggleAllOff,
  countOfTurnedOnLights,
  lights,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        handleToggleAllOff={handleToggleAllOff}
        handleToggleAllOn={handleToggleAllOn}
        countOfTurnedOnLights={countOfTurnedOnLights}
        lights={lights}
      />
    </>
  );
}
