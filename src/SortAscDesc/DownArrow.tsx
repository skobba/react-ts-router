import * as React from "react";
import "./DownArrow.scss";
const styles = {
  downArrow: {
    height: "100%",
    width: "100%",
    /*     height: "20px",
    width: "20px", */
    /*     display: "inline",
    position: "absolute", */
    backgroundColor: "green",
    cursor: "pointer"
  } as React.CSSProperties
};

interface CardProps {
  style: React.CSSProperties;
}

export const DownArrow: React.FC<CardProps> = ({ style }) => (
  <div style={style} className="card">
    <svg style={styles.downArrow} viewBox="0 270 325 195">
      <rect x="0" y="270" width="100%" height="100%" fill="yellow" />
      <path
        fill="red"
        d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
      />
    </svg>
  </div>
);
