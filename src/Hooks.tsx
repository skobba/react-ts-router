import * as React from "react";
import {
  useLastLocation,
  WithLastLocationProps
} from "react-router-last-location";

const Hooks: React.FC<WithLastLocationProps> = () => {
  const lastLocation = useLastLocation();

  return (
    <div>
      <h1>Hooks!</h1>
      <p>
        This component is using new React's feature -{" "}
        <a href="https://reactjs.org/docs/hooks-overview.html">hooks</a>.
      </p>
      <h2>Your last location</h2>
      <pre>{JSON.stringify(lastLocation, undefined, 2)}</pre>
    </div>
  );
};

export default Hooks;
