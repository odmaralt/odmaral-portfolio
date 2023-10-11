import styles from "../styles/Home.module.css";
import ImageContainer from "../components/ImageContainer";
import { ProjectsData } from "../data/projectsData";
export default function PortfolioPage() {
  return (
    <div className={styles.portfolioPageDiv}>
      {ProjectsData.map((item, idx) =>
        idx % 2 === 0 ? (
          <div className={styles.imageFlex} key={idx}>
            <ImageContainer src={item.src} text={item.text} link={item.link} />
            {idx + 1 < ProjectsData.length && (
              <ImageContainer
                src={ProjectsData[idx + 1].src}
                text={ProjectsData[idx + 1].text}
                link={ProjectsData[idx + 1].link}
              />
            )}{" "}
          </div>
        ) : null
      )}
    </div>
  );
}
