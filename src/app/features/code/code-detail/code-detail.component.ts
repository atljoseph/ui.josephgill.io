import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LogService } from 'src/app/core/services/log.service';
import { NavService } from 'src/app/core/services/navigation.service';
import { ResponsiveImageService } from 'src/app/core/services/responsive-image.service';

import { ICodeContent, ICodePhoto, ICodeBlock } from '../../../core/models/code.types';
import { CodeArticle } from '../../../core/models/code.model';
import { Subscription, combineLatest } from 'rxjs';
import { ContentService } from 'src/app/core/services/content.service';

interface ICodeDetailRouteParams {
  articleKey: string;
}

@Component({
  // selector: 'app-tip',
  templateUrl: './code-detail.component.html',
  styleUrls: ['./code-detail.component.scss']
})
export class CodeDetailComponent implements OnInit, OnDestroy {

  handleId: string = 'PhotoAlbumComponent';
  codeArticle: CodeArticle;
  subscriptions: Subscription =  new Subscription();

  constructor(
    private logger: LogService,
    private route: ActivatedRoute,
    private nav: NavService,
    public responsiveImage: ResponsiveImageService,
    private content: ContentService,
  )  { 
    
  }

  codeArticleByKey(articles: CodeArticle[], routeKey: string): CodeArticle {
    return articles.find((article) => {
      return article.routeKey.trim().toLowerCase() === routeKey.trim().toLowerCase();
    });
  }

  ngOnInit() {
    this.responsiveImage.getCodeArticles(() => {
      setTimeout(() => this.content.scrollTick(1), 500)
    })
    this.subscriptions.add(
      combineLatest(this.route.params, this.responsiveImage.codeArticlesObservable)
        .subscribe(([params, articles]) => {
          const codeArticle = this.codeArticleByKey(articles, params.articleKey);
          this.logger.log('combineLatest(this.route.params, this.content.codeArticlesObservable).subscribe()', this.handleId, { params, codeArticle });
          if (!codeArticle && articles.length > 0) return this.nav.go('code');
          else {
            this.codeArticle = codeArticle
          };
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  groupTrackBy(index, group: ICodeContent) { return index + group.title; }
  photoTrackBy(index, photo: ICodePhoto) { return index + photo.src; }
  blockTrackBy(index, block: ICodeBlock) { return index + block.title; }
  noteTrackBy(index, note: string) { return index; }

  formattedNote(note: string, notesLength: number) {
    const prefix = notesLength < 2 ? 'Note: ' : '';
    return `${prefix}${note}`;
  }
}
