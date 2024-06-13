import Image from "next/image";
import React from "react";

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  color?: string;
}

const Card: React.FC<CardProps> = ({
  title = "",
  description = "",
  image = "",
  color = "#000",
}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <div>
        <Image src={image} fill alt={title} />
      </div>
      <p>{color}</p>
    </div>
  );
};

export default Card;
