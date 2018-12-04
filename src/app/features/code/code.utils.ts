
import {
    ICodeArticle,
    ICodeContent,
    ICodePhoto,
    ICodeBlock
} from './code.types';
import { CodeArticle } from './code.model';
import { codeArticlesData } from './code.data';

// ###############################

export const codeArticleByKey = (routeKey: string): CodeArticle => {
  return codeArticles.find((article) => {
    return article.routeKey.trim().toLowerCase() === routeKey.trim().toLowerCase();
  });
}
export const codeArticles = codeArticlesData.map((albumData): CodeArticle => {
  return albumData ? new CodeArticle(albumData) : null;
});
