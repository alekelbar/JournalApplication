import { ClassNames } from '@emotion/react';
import React from 'react';
import styles from './image.module.css';

interface Props {
  image: string,
  imageStyles?: React.CSSProperties;
  containerStyles?: React.CSSProperties;
  alt?: string;
}

export const Image: React.FC<Props> = ({ containerStyles, imageStyles, image, alt }) => {
  return (
    <figure style={containerStyles}>
      <img className={styles.reponsive_image} style={imageStyles} loading="lazy" src={image} alt={alt} />
    </figure>
  );
};
