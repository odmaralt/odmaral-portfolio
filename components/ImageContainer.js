import styles from "../styles/Home.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ImageContainer(props) {
  const { src, text, link } = props;

  const [showDiv, setShowDiv] = useState(false);
  const showDisplay = () => {
    setShowDiv(true);
  };
  const hideDisplay = () => {
    setShowDiv(false);
  };
  return (
    <div>
      <div
        onMouseEnter={showDisplay}
        onMouseLeave={hideDisplay}
        style={{ position: "relative" }}
      >
        {showDiv && (
          <div className={styles.imageTextPortfolio}>
            <Link className={styles.hoverText} href={link}> {text}</Link>
          </div>
        )}
        <a>
          <Image className={styles.darkenImage} src={src} />
        </a>
      </div>
    </div>
  );
}
