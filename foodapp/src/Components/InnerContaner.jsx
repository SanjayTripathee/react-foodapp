import styles from "./innercontaner.module.css";

export default function InnerContaner({ children }) {
  return <div className={styles.innercontaner}>{children}</div>;
}
