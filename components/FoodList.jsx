"use client";
import { useState } from "react";
import styles from '../styles/Card.module.css';

export default function FoodList() {
  const [foods] = useState([
    "Poutine",
    "Peameal Bacon Sandwich",
    "Butter Tart",
    "Nanaimo Bar"
  ]);

  return (
    <div>
      <h2>Top Foods in Toronto</h2>
      <div className={styles.cardContainer}>
        {foods.map((food, index) => (
          <div key={index} className={styles.card}>{food}</div>
        ))}
      </div>
    </div>
  );
}