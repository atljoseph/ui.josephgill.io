
import { IPhoto, IPhotoGroup, IPhotoAlbum } from '../../features/photo-albums/photo-albums.types';

export class PhotoAlbum {
    private album: IPhotoAlbum;
    isHovered: boolean = false;

    constructor(album: IPhotoAlbum) {
        this.album = album;
    }

    get coverPhotoSrc(): string {
        // const groups = this.album.photoGroups;
        // let photo = null;
        // if (groups && groups.length) {
        //     const photos = groups[0].photos;
        //     if (photos && photos.length) {
        //         photo = photos[0];
        //     }
        // }
        // return photo;
        return this.album.coverPhotoSrc;
    }

    get title(): string {
        return this.album.title;
    }

    get photoGroups(): IPhotoGroup[] {
        return this.album.photoGroups;
    }

    get routeKey(): string {
        return this.album.routeKey;
    }
}
