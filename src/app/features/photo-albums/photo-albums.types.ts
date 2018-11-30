
export interface IPhoto {
    description?: string;
    src: string;
}

export interface IPhotoGroup {
    title: string;
    photos: IPhoto[];
}