
import { IPhoto, IPhotoGroup, IPhotoAlbum } from './photo-albums.types';

export class PhotoAlbum {
    private album: IPhotoAlbum;

    constructor(album: IPhotoAlbum) {
        this.album = album;
    }

    get coverPhoto(): IPhoto {
        const groups = this.album.photoGroups;
        let photo = null;
        if (groups && groups.length) {
            const photos = groups[0].photos;
            if (photos && photos.length) {
                photo = photos[0];
            }
        }
        return photo;
    }

    get title(): string {
        return this.album.title;
    }

    get photoGroups(): IPhotoGroup[] {
        return this.album.photoGroups;
    }
}
