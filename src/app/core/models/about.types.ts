
export interface IAboutLink {
    label?: string;
    href: string;
    isRouterLink?: boolean;
}

export interface IAbout {
    src?: string;
    description?: string;
    link?: IAboutLink;
}

export interface IAboutGroup {
    title?: string;
    description?: string;
    photos?: IAbout[];
    links?: IAboutLink[];
}
