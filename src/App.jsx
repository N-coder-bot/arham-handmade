import Header from "./components/Header";
import Home from "./pages/Home";
import styles from "./App.module.css";
import flowerSvg from "./assets/flower.svg";
import Button from "./components/Button";
//https://colorhunt.co/palette/f6f1f119a7ce146c94000000 --color template
function App() {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.starcontainer}>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ width: "15px" }}
            alt=""
            id={styles.s1}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ height: "20px" }}
            alt=""
            id={styles.s2}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ width: "14px" }}
            alt=""
            id={styles.s3}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ width: "40px" }}
            alt=""
            id={styles.s4}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ width: "30px" }}
            alt=""
            id={styles.s5}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ width: "25px" }}
            alt=""
            id={styles.s6}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ width: "15px" }}
            alt=""
            id={styles.s7}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ height: "15px" }}
            alt=""
            id={styles.s8}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ width: "25px" }}
            alt=""
            id={styles.s9}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ width: "53px" }}
            alt=""
            id={styles.s10}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ width: "20px" }}
            alt=""
            id={styles.s11}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ width: "40px" }}
            alt=""
            id={styles.s12}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ width: "15px" }}
            alt=""
            id={styles.s13}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ height: "15px" }}
            alt=""
            id={styles.s14}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ width: "23px" }}
            alt=""
            id={styles.s15}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ width: "20px" }}
            alt=""
            id={styles.s16}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ width: "15px" }}
            alt=""
            id={styles.s17}
          />
        </div>
        <div className={styles.shape}>
          <img
            src={flowerSvg}
            style={{ width: "20px" }}
            alt=""
            id={styles.s18}
          />
        </div>
      </div>
      <Home />
    </div>
  );
}

export default App;
