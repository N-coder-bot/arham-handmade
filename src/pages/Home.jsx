import styles from "./Home.module.css";
import arham from "../assets/ARHAM HANDMADE.svg";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";
function Home() {
  const [inView, setinView] = useState(false);
  const [inView2, setinView2] = useState(false);
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
          Scroll-below||
        </div>
      </div>
      <InView onChange={setinView} triggerOnce={true} threshold={0.1}>
        {({ ref, inView }) => (
          <div ref={ref} style={{ display: "flex", gap: "4rem" }}>
            <Link
              to="/Bedsheet"
              className={
                inView ? `${styles.card} ${styles.active}` : `${styles.card}`
              }
            >
              <p>Bedsheet</p>
              <div className={styles.tooltip}>view more</div>
            </Link>
            <Link
              to="Saree"
              className={
                inView ? `${styles.card} ${styles.active}` : `${styles.card}`
              }
            >
              <p> Saree</p>
              <div className={styles.tooltip}>view more</div>
            </Link>
            <Link
              to="/Kurtis"
              className={
                inView ? `${styles.card} ${styles.active}` : `${styles.card}`
              }
            >
              <p>Kurtis</p>
              <div className={styles.tooltip}>view more</div>
            </Link>
          </div>
        )}
      </InView>
      <InView onChange={setinView2} triggerOnce={true} threshold={0}>
        {({ ref, setinView2 }) => (
          <div ref={ref} style={{ display: "flex", gap: "4rem" }}>
            <Link
              to="/Shoes"
              className={
                inView2 ? `${styles.card} ${styles.active}` : `${styles.card}`
              }
            >
              <p>Shoe</p>
              <div className={styles.tooltip}>view more</div>
            </Link>
            <Link
              to="/Tshirts"
              className={
                inView2 ? `${styles.card} ${styles.active}` : `${styles.card}`
              }
            >
              <p>Tshirts</p>
              <div className={styles.tooltip}>view more</div>
            </Link>
            <Link
              to="/Showls"
              className={
                inView2 ? `${styles.card} ${styles.active}` : `${styles.card}`
              }
            >
              <p>Showl</p>
              <div className={styles.tooltip}>view more</div>
            </Link>
          </div>
        )}
      </InView>
    </div>
  );
}

export default Home;
