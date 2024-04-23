import { useState } from "react";
import styles from "./style.module.css";

interface PhotoCarouselProps {
  images: string[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
      <div className={styles.imagesContainer}>
        {images.map((imageName, index) => (
          <img
            key={index}
            src={`./caminho/para/${imageName}`}
            alt={imageName}
            className={index === currentIndex ? styles.active : ''}
          />
        ))}
      </div>
      <button className={styles.next} onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default PhotoCarousel;
