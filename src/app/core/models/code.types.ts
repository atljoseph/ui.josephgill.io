
export interface ICodePhoto { // TODO details
    title?: string;
    description?: string;
    src: string;
    notes?: string[];
}

export interface ICodeBlock { // TODO details
    title?: string;
    description?: string;
    notes?: string[];
    code?: string;
}

export interface ICodeContent {
    title?: string;
    description?: string;
    photos?: ICodePhoto[];
    codeBlocks?: ICodeBlock[]; 
    notes?: string[];
}

export interface ICodeArticle {
    title: string;
    description?: string;
    routeKey: string;
    tags: string[]; //TODO landing
    coverPhotoSrc?: string; //TODO details
    coverCodeBlock?: string; //TODO details
    contentGroups: ICodeContent[];
}
