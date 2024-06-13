import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";

// Define the Props interface
interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  color?: string;
  loading?: boolean;
}

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
    <div className={`${styles.card} ${hoverClass}`}>
      <p>{title}</p>
      <p>{description}</p>
      <div className={styles.imageContainer}>
        <Image src={image} fill alt={title} />
      </div>
    </div>
  );
};

export default Card;

// import Image from "next/image";
// import React from "react";
// import styles from "./Card.module.css";

// // Define the Props interface
// interface CardProps {
//   title?: string;
//   description?: string;
//   image?: string;
//   color?: string;
// }

// // Type the component
// const Card: React.FC<CardProps> = ({
//   title = "",
//   description = "",
//   image = "",
//   color = "",
// }) => {
//   const hoverClass =
//     color === "black" ? styles.blackHover : styles.lightGreyHover;

//   return (
//     <div className={`${styles.card} ${hoverClass}`}>
//       <p>{title}</p>
//       <p>{description}</p>
//       <div className={styles.imageContainer}>
//         <Image src={image} fill alt={title} />
//       </div>
//     </div>
//   );
// };

// export default Card;

// import Image from "next/image";
// import React from "react";

// interface CardProps {
//   title?: string;
//   description?: string;
//   image?: string;
//   color?: string;
// }

// const Card: React.FC<CardProps> = ({
//   title = "",
//   description = "",
//   image = "",
//   color = "#000",
// }) => {
//   return (
//     <div>
//       <p>{title}</p>
//       <p>{description}</p>
//       <div>
//         <Image src={image} fill alt={title} />
//       </div>
//       <p>{color}</p>
//     </div>
//   );
// };

// export default Card;
