
export interface IAbout {
    description?: string;
    src: string;
}

export interface IAboutGroup {
    title: string;
    photos?: IAbout[];
    description?: string;
}
