import React from "react";
import Image from "next/image";

// Example star icons – you can replace them with your own <svg> icons or from an icon library
const FullStar = () => (
    <Image
      src="/icons/star.svg"
      alt="star"
      width={20}
      height={20}
      className="object-contain" />
);

const HalfStar = () => (
    <Image
    src="/icons/half-star.svg"
    alt="star"
    width={20}
    height={20}
    className="object-contain" />
);

const EmptyStar = () => (
    <Image
    src="/icons/empty-star.svg"
    alt="star"
    width={20}
    height={20}
    className="object-contain" />
);

interface StarRatingProps {
  rating: number; // e.g. 4.5
}

export function StarRating({ rating }: StarRatingProps) {
  // Floor to get full stars
  const fullStars = Math.floor(rating); // e.g. 4
  // Determine if there's a half star
  const hasHalf = rating - fullStars >= 0.5;
  // The rest are empty
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FullStar key={`full-${i}`} />);
  }
  if (hasHalf) {
    stars.push(<HalfStar key="half" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<EmptyStar key={`empty-${i}`} />);
  }

  return <div className="flex">{stars}</div>;
}
