
import { IPhoto, IPhotoGroup, IPhotoAlbum } from './photo-albums.types';
import { PhotoAlbum } from './photo-album.model';
import { photoAlbumsData } from './photo-albums.data';

// ##############################

export const assetBaseDir: string = '../../../assets/images/resized';

// ##############################

export const responsiveTestSrcs: string[] = [
  'candler-and-ngan.jpg',
  'candler-umbrella-deer.jpg',
  'brownie-monster.jpg',
  'candler-trains-on-floor.jpg',
  'candler-cracker-barrel.jpg',
  'candler-glasses-laughing.jpg',
];
export const imgSrcSetTest = (src: string): string => {
  // test responsive image
  const srcs: string[] = responsiveSizes.map((size, index) => {
    const imgSrc = responsiveTestSrcs[index];
    return `${assetBaseDir}/${responsiveSizeFallback}/${imgSrc} ${size}w`;
  });
  return srcs.join(',');
}
export const imgSrcTest = (src: string): string => {
  // test fallback image
  return `${assetBaseDir}/${responsiveSizeFallback}/${responsiveTestSrcs[0]}`;
}

// ##############################

export const responsiveSizes: number[] = [640, 768, 1024];//, 1366];//, 1600, 1920];
export const responsiveSizeFallback: number = 640;
export const imgSrcSet = (src: string): string => {
  // responsive image
  const srcs: string[] = responsiveSizes.map(size => {
    return `${assetBaseDir}/${size}/${src} ${size}w`;
  });
  return srcs.join(',');
}
export const imgSrc = (src: string): string => {
  // fallback image
  return `${assetBaseDir}/${responsiveSizeFallback}/${src}`;
}

// ###############################

export const photoAlbumByKey = (key: string): PhotoAlbum => {
  return photoAlbums.find((album) => {
    return album.key.trim().toLowerCase() === key.trim().toLowerCase();
  });
}
export const photoAlbums = photoAlbumsData.map((albumData): PhotoAlbum => {
  return albumData ? new PhotoAlbum(albumData) : null;
});
