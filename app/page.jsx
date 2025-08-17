import Weather from '../components/Weather';
import FoodList from '../components/FoodList';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Weather />
      <FoodList />
    </div>
  );
}