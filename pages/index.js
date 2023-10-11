import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import PortfolioPage from "./PortfolioPage";
import SkillsPage from "./SkillsPage";
import { useState } from "react";

export default function Home() {
  
  const [state, setState] = useState("portfolio");

  const handleSkillsClick = () => {
    setState("skills");
  };
  const handlePortfolioClick = () => {
    setState("portfolio");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
      </Head>

      <main className={styles.mainDiv}>
        <Header />
        {state === "portfolio" && (
          <div>
            <div className={styles.pageSwitchDiv}>
              <button className={styles.selectedButton}>Portfolio</button>
              <button
                onClick={handleSkillsClick}
                className={styles.notSelectedButton}
              >
                Skills
              </button>
            </div>
            <PortfolioPage />
          </div>
        )}
        {state === "skills" && (
          <div>
            <div className={styles.pageSwitchDiv}>
              <button
                onClick={handlePortfolioClick}
                className={styles.notSelectedButton}
              >
                Portfolio
              </button>
              <button className={styles.selectedButton}>Skills</button>
            </div>
            <SkillsPage />
          </div>
        )}
        <Footer />
      </main>
      <style jsx>{`
        main {
          padding: 4rem 0 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
