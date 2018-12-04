
export interface IPhoto {
    description?: string;
    src: string;
}

export interface IPhotoGroup {
    title?: string;
    description?: string;
    photos: IPhoto[];
}

export interface IPhotoAlbum {
    title: string;
    routeKey: string;
    photoGroups: IPhotoGroup[];
    coverPhotoSrc: string;
}
