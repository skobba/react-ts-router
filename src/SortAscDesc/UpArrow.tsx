import * as React from "react";
import "./UpArrow.scss";

const styles = {
  upArrow: {
    height: "100%",
    width: "100%",
    /*     height: "20px",
    width: "20px", */
    //    display: "inline",
    //    position: "relative",
    backgroundColor: "green",
    cursor: "pointer"
  } as React.CSSProperties
};

interface CardProps {
  style: React.CSSProperties;
}

export const UpArrow: React.FC<CardProps> = ({ title, style }) => (
  <div style={style} className="">
    <svg style={styles.upArrow} viewBox="0 45 325 195">
      <rect x="0" y="45" width="100%" height="100%" fill="yellow" />
      <path
        //fill="currentColor"
        fill="red"
        d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
        className=""
      />
    </svg>
  </div>
);
