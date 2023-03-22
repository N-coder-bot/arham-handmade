import styles from "./Home.module.css";
import arham from "../assets/ARHAM HANDMADE.svg";
import { useState } from "react";
function Home() {
  const [active, setactive] = useState(false);
  // const onScroll = () => {
  //   const yoffset = window.scrollY;
  //   if (yoffset >= 10) {
  //     setactive(true);
  //     window.removeEventListener("scroll", onScroll);
  //   } else setactive(false);
  // };
  // window.addEventListener("scroll", onScroll, { parse: true });
  // let options = {
  //   root: document.getElementsByClassName(`${styles.title}`),
  //   rootMargin: "0 0 50px 0px",

  // }
  // let observer = new IntersectionObserver(callback, options);
  return (
    <div className={styles.homecontainer}>
      <div className={styles.title}>
        <img
          src={arham}
          style={{
            width: "900px",
            height: "100px",
          }}
        />
        <div className={styles.intro}>
          <p>"Elevate your wardrobe with our handmade kurtis."</p>
          <p>
            "Handmade with love, worn with pride,wear the colors of tradition."
          </p>
        </div>
      </div>
      <div className={styles.cardcontainer}>
        <div
          className={
            active ? `${styles.card} ${styles.active}` : `${styles.card}`
          }
        ></div>
        <div
          className={
            active ? `${styles.card} ${styles.active}` : `${styles.card}`
          }
        ></div>
        <div
          className={
            active ? `${styles.card} ${styles.active}` : `${styles.card}`
          }
        ></div>
      </div>
    </div>
  );
}

export default Home;
