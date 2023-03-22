import className from "classnames";
import styles from "./Button.module.css";
function Button({ children, primary, secondary, standard, rounded }) {
  const Rounded = `${styles.rounded}`;
  const classes = className(`${styles.button}`, {
    [`${styles.rounded}`]: rounded,
    [`${styles.primary}`]: primary,
    [`${styles.secondary}`]: secondary,
    [`${styles.standard}`]: standard,
  });
  return <button className={classes}>{children}</button>;
}

export default Button;
