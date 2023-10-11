import styles from "../styles/Home.module.css";
export default function ProgressBar(props) {
  const { color, completed, text } = props;
  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: color,
    borderRadius: 5,
    textAlign: "right",
    animation: "animate 6s",
  };
  return (
    <div>
      <p className={styles.skillName}>{text}</p>
      <div className={styles.containerStyles}>
        <div style={fillerStyles}>
          <span className={styles.labelStyles}></span>
        </div>
      </div>
    </div>
  );
}

