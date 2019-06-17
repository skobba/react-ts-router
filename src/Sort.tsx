import * as React from "react";
import {
  useLastLocation,
  WithLastLocationProps
} from "react-router-last-location";
import SortAcsDesc from "./SortAscDesc/SortAscDesc.component";
import TestComp from "./test";

const styles = {
  outerBox: {
    height: "100%",
    width: "100%",
    backgroundColor: "grey"
  },
  text: {
    display: "inline",
    fontSize: "40px"
  }
};

const Sort: React.FC<WithLastLocationProps> = () => {
  const lastLocation = useLastLocation();

  return (
    <div>
      <h1>SortAscDesc</h1>

      <div style={styles.outerBox}>
        <div style={styles.text}>Kolonne </div>
        <SortAcsDesc />
      </div>
    </div>
  );
};

export default Sort;
