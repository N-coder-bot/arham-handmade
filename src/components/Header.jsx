import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>navigation</div>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>Arham Handmade</h2>
        </div>
        <div className={styles.sociallinks}>social links</div>
      </div>
    </div>
  );
}

export default Header;
