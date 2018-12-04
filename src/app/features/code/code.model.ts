
import {
    ICodeArticle,
    ICodeContent,
    ICodePhoto,
    ICodeBlock
} from './code.types';

export class CodeArticle {
    private codeArticle: ICodeArticle;
    isHovered: boolean = false;

    constructor(codeArticle: ICodeArticle) {
        this.codeArticle = codeArticle;
    }

    get routeKey(): string {
        return this.codeArticle.routeKey;
    }

    get title(): string {
        return this.codeArticle.title;
    }

    get coverPhotoSrc(): string {
        return this.codeArticle.coverPhotoSrc;
    }

    get contentGroups(): ICodeContent[] {
        return this.codeArticle.contentGroups;
    }

    get tags(): string[] {
        return this.codeArticle.tags;
    }
}
