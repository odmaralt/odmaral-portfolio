import Image from "next/image";
import styles from "../styles/Home.module.css";
import profile from "../assets/pfp.png";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  const handleDownloadResume = () => {
    fetch("/odmaral-resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Curriculum.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerDiv}>
        <div>
          <Image
            className={styles.pfpImg}
            src={profile}
            height={160}
            alt="Picture of the author"
          />
        </div>

        <div>
          <p className={styles.name}>
            Odmaral <br></br>Tumenjargal
          </p>
          <p className={styles.job}>Software Developer</p>
          <div className={styles.contactDiv}>
            <button className={styles.contactLink}>
              <a
                href="https://github.com/odmaralt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.25 0.369995C11.6882 0.370143 8.2427 1.63767 5.52996 3.94577C2.81721 6.25387 1.01426 9.45193 0.44371 12.9677C-0.126842 16.4835 0.572237 20.0876 2.41586 23.1351C4.25948 26.1826 7.12734 28.4747 10.5063 29.6012C11.2563 29.7325 11.5375 29.2825 11.5375 28.8887C11.5375 28.5325 11.5188 27.3512 11.5188 26.095C7.75001 26.7887 6.77501 25.1763 6.47501 24.3325C6.14212 23.5119 5.61442 22.7847 4.93751 22.2137C4.41251 21.9325 3.66251 21.2387 4.91875 21.22C5.39843 21.2721 5.85849 21.439 6.25996 21.7066C6.66142 21.9743 6.99246 22.3347 7.22501 22.7575C7.43017 23.126 7.70603 23.4505 8.0368 23.7122C8.36756 23.974 8.74672 24.1679 9.15256 24.2828C9.5584 24.3978 9.98293 24.4316 10.4018 24.3822C10.8207 24.3328 11.2258 24.2012 11.5937 23.995C11.6587 23.2324 11.9985 22.5194 12.55 21.9888C9.21251 21.6138 5.72501 20.32 5.72501 14.5825C5.70393 13.0918 6.25404 11.6494 7.26251 10.5513C6.80393 9.25562 6.85759 7.83372 7.41251 6.57629C7.41251 6.57629 8.66872 6.18252 11.5375 8.11379C13.9919 7.43875 16.5831 7.43875 19.0375 8.11379C21.9062 6.16379 23.1625 6.57629 23.1625 6.57629C23.7175 7.8337 23.7712 9.25563 23.3125 10.5513C24.324 11.6475 24.8746 13.0911 24.85 14.5825C24.85 20.3387 21.3437 21.6138 18.0063 21.9888C18.3642 22.3516 18.6399 22.7872 18.8146 23.2661C18.9893 23.7449 19.059 24.2557 19.0188 24.7638C19.0188 26.7701 19 28.3825 19 28.8888C19 29.2826 19.2812 29.7513 20.0312 29.6013C23.4042 28.4656 26.2639 26.1681 28.0996 23.1191C29.9354 20.07 30.6278 16.4677 30.0533 12.9554C29.4788 9.44296 27.6748 6.24905 24.9632 3.94376C22.2517 1.63847 18.8091 0.371847 15.25 0.369995V0.369995Z"
                    fill="#ECE5DB"
                  />
                </svg>
              </a>
            </button>

            <button className={styles.contactLink}>
              <a
                href="https://www.linkedin.com/in/odmaral-tumenjargal-b623a6256/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.955 2.99997H5.545C5.25936 2.996 4.97575 3.04834 4.71034 3.15399C4.44494 3.25965 4.20295 3.41655 3.99819 3.61573C3.79343 3.81492 3.62992 4.05249 3.51698 4.31488C3.40405 4.57727 3.34391 4.85933 3.34 5.14497V30.855C3.34391 31.1406 3.40405 31.4227 3.51698 31.6851C3.62992 31.9474 3.79343 32.185 3.99819 32.3842C4.20295 32.5834 4.44494 32.7403 4.71034 32.8459C4.97575 32.9516 5.25936 33.0039 5.545 33H30.955C31.2406 33.0039 31.5242 32.9516 31.7896 32.8459C32.055 32.7403 32.297 32.5834 32.5018 32.3842C32.7066 32.185 32.8701 31.9474 32.983 31.6851C33.0959 31.4227 33.1561 31.1406 33.16 30.855V5.14497C33.1561 4.85933 33.0959 4.57727 32.983 4.31488C32.8701 4.05249 32.7066 3.81492 32.5018 3.61573C32.297 3.41655 32.055 3.25965 31.7896 3.15399C31.5242 3.04834 31.2406 2.996 30.955 2.99997ZM12.385 28.11H7.885V14.61H12.385V28.11ZM10.135 12.72C9.51439 12.72 8.9192 12.4734 8.48037 12.0346C8.04153 11.5958 7.795 11.0006 7.795 10.38C7.795 9.75936 8.04153 9.16417 8.48037 8.72534C8.9192 8.2865 9.51439 8.03997 10.135 8.03997C10.4645 8.00259 10.7983 8.03525 11.1143 8.13579C11.4304 8.23633 11.7216 8.4025 11.969 8.62341C12.2164 8.84432 12.4143 9.11498 12.5498 9.41769C12.6853 9.72039 12.7554 10.0483 12.7554 10.38C12.7554 10.7116 12.6853 11.0395 12.5498 11.3422C12.4143 11.6449 12.2164 11.9156 11.969 12.1365C11.7216 12.3574 11.4304 12.5236 11.1143 12.6241C10.7983 12.7247 10.4645 12.7573 10.135 12.72ZM28.615 28.11H24.115V20.865C24.115 19.05 23.47 17.865 21.835 17.865C21.329 17.8687 20.8363 18.0274 20.4232 18.3197C20.0102 18.6121 19.6967 19.024 19.525 19.5C19.4076 19.8525 19.3568 20.2238 19.375 20.595V28.095H14.875C14.875 28.095 14.875 15.825 14.875 14.595H19.375V16.5C19.7838 15.7906 20.3784 15.2062 21.0947 14.8098C21.811 14.4133 22.6218 14.2197 23.44 14.25C26.44 14.25 28.615 16.185 28.615 20.34V28.11Z"
                    fill="#ECE5DB"
                  />
                </svg>
              </a>
            </button>

            <button
              className={styles.contactLink}
              onClick={() => router.push("mailto:oddy976@gmail.com")}
            >
              <svg
                width="37"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_8_253)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.25 26.9531L0.25 11.0681V31.4999H36.25V11.0681L18.25 26.9531ZM18.2518 22.1615L0.25 6.26571V4.49988H36.25V6.26571L18.2518 22.1615Z"
                    fill="#ECE5DB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8_253">
                    <rect
                      width="36"
                      height="36"
                      fill="white"
                      transform="translate(0.25)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.experienceDiv}>
        <div>
          3<br></br>Years of work <br></br>experience
        </div>
        <div>
          8+ <br></br>Completed <br></br>projects
        </div>
      </div>
      <div className={styles.resumeContactDiv}>
        <div>
          <button
            onClick={handleDownloadResume}
            className={styles.resumeButton}
          >
            Download Resume
          </button>
        </div>

        <div>
          <button
            onClick={() => router.push("mailto:oddy976@gmail.com")}
            className={styles.contactButton}
          >
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
}
