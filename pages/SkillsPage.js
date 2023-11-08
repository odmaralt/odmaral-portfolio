import ProgressBar from "../components/ProgressBar";
import { ProgressData } from "../data/ProgressData";
import styles from "../styles/Home.module.css";

export default function SkillsPage() {
  return (
    <div className={styles.skillsPageDiv}>
      <div>
        {ProgressData.map((item, idx) => (
          <ProgressBar
            key={idx}
            text={item.text}
            color={item.color}
            completed={item.completed}
          />
        ))}
      </div>
    </div>
  );
}
