"use client";
import { useParams } from "next/navigation";
import styles from "../../../styles/RestaurantPage.module.css";

const restaurantData = {
  "The Shangrila Hotel": { description: "Trendy restaurant & bar with art shows.", rating: 4.5 },
  "St. Lawrence Market": { description: "Historic market with food stalls.", rating: 4.7 },
  "Kensington Market Eats": { description: "Diverse cuisines in a vibrant market.", rating: 4.6 },
  "Chinatown Food Street": { description: "Authentic Asian street food.", rating: 4.4 }
};

export default function RestaurantPage() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name); // ⚡ important!
  const restaurant = restaurantData[decodedName];

  if (!restaurant) return <p>Restaurant not found.</p>;

  return (
    <div className={styles.container}>
      <h1>{decodedName}</h1>
      <p>{restaurant.description}</p>
      <p>Rating: {restaurant.rating} ⭐</p>
    </div>
  );
}