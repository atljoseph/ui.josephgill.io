
import { IPhoto, IPhotoGroup, IPhotoAlbum } from './photo-albums.types';
import { PhotoAlbum } from './photo-album.model';
import { photoAlbumsData } from './photo-albums.data';

// ###############################

export const photoAlbumByKey = (routeKey: string): PhotoAlbum => {
  return photoAlbums.find((album) => {
    return album.routeKey.trim().toLowerCase() === routeKey.trim().toLowerCase();
  });
}
export const photoAlbums = photoAlbumsData.map((albumData): PhotoAlbum => {
  return albumData ? new PhotoAlbum(albumData) : null;
});
