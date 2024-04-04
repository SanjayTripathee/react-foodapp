import styles from "./contaner.module.css";
export default function Contaner({ children }) {
  // passing children props
  return <div className={styles.parentContaner}>{children}</div>;
}
