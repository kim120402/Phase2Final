import Link from "next/link";
import styles from "../styles/List.module.css";

export default function RestaurantList({ restaurants }) {
  return (
    <ul className={styles.list}>
      {restaurants.map((name, index) => (
        <li key={index} className={styles.item}>
          <Link href={`/restaurants/${encodeURIComponent(name)}`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}