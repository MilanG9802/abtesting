import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
import { Statsig } from "statsig-react";

// Type the component
const Card: React.FC<CardProps> = ({
  title = "",
  description = "",
  image = "",
  color = "",
  loading = false,
}) => {
  const hoverClass =
    color === "black" ? styles.blackHover : styles.lightGreyHover;

  if (loading) {
    return (
      <div className={`${styles.card} ${styles.skeleton}`}>
        <div className={`${styles.skeletonText} ${styles.shimmerEffect}`}></div>
        <div className={`${styles.skeletonText} ${styles.shimmerEffect}`}></div>
        <div
          className={`${styles.skeletonImage} ${styles.shimmerEffect}`}
        ></div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.card} ${hoverClass}`}
      onMouseEnter={() => {
        Statsig.logEvent(
          "card_hover", // Name
          19.99, // Price
          {
            title,
            description,
          }
        );
      }}
    >
      <p>{title}</p>
      <p>{description}</p>
      <div className={styles.imageContainer}>
        <Image src={image} fill alt={title} />
      </div>
    </div>
  );
};

export default Card;
