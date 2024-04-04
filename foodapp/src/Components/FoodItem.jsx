import styles from "./fooditem.module.css";

export default function FoodItem({ food }) {
  return (
    <div className={styles.itemcontner}>
      <img className={styles.itemImage} src={food.image} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>

      <div className={styles.buttonContaner}>
        <button className={styles.itemButton}>View Recipi</button>
      </div>
    </div>
  );
}
