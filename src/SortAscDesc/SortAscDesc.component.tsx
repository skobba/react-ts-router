import * as React from "react";
import { UpArrow } from "./UpArrow";
import { DownArrow } from "./DownArrow";

const styles = {
  outerBox: {
    backgroundColor: "red",
    position: "absolute",
    display: "inline",
    fontSize: "20px"
  },
  text: {
    backgroundColor: "red",
    position: "relative",
    display: "inline"
  },
  upArrow: {
    height: "18px",
    width: "30px"
    //position: "absolute",
    //display: "inline"
  } as React.CSSProperties,
  downArrow: {
    height: "18px",
    width: "30px",
    //top: "0px",
    position: "absolute",
    //paddingTop: "0%",
    display: "inline"
  } as React.CSSProperties
};

export const SortAscDesc: React.FC = () => (
  <div style={styles.outerBox} className="">
    {/* <div style={styles.text}>SortAscDesc</div> */}
    <UpArrow style={styles.upArrow} />
    <DownArrow style={styles.downArrow} />
  </div>
);

export default SortAscDesc;
