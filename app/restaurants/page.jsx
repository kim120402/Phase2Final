import RestaurantList from '../../components/RestaurantList';
import styles from '../../styles/Restaurants.module.css';

export default function RestaurantsPage() {
  const restaurants = [
    "The Shangrila Hotel",
    "St. Lawrence Market",
    "Kensington Market Eats",
    "Chinatown Food Street",
  ];

  return (
    <div className={styles.container}>
      <h1>Top Toronto Restaurants</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}