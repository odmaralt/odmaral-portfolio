import ProgressBar from "../components/ProgressBar";
import { progressData } from "../data/ProgressData";
import styles from "../styles/Home.module.css";
export default function SkillsPage() {
  return (
    <div className={styles.skillsPageDiv}>
      <div>
        {progressData.map((item, idx) => (
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
