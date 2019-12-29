import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LogService } from 'src/app/core/services/log.service';
import { NavService } from 'src/app/core/services/navigation.service';
import { ResponsiveImageService } from 'src/app/core/services/responsive-image.service';

import { ICodeContent, ICodePhoto, ICodeBlock } from '../../../core/models/code.types';
import { CodeArticle } from '../../../core/models/code.model';
import { Subscription, combineLatest } from 'rxjs';

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
    public responsiveimage: ResponsiveImageService,

  )  { 
    this.subscriptions.add(
      combineLatest(this.route.params, this.responsiveimage.codeArticlesObservable)
        .subscribe(([params, articles]) => {
          const codeArticle = this.codeArticleByKey(articles, params.articleKey);
          this.logger.log('combineLatest(this.route.params, this.content.codeArticlesObservable).subscribe()', this.handleId, { params, codeArticle });
          if (!codeArticle) return this.nav.go('code');
          else this.codeArticle = codeArticle;
        })
    );
  }

  codeArticleByKey(articles: CodeArticle[], routeKey: string): CodeArticle {
    return articles.find((article) => {
      return article.routeKey.trim().toLowerCase() === routeKey.trim().toLowerCase();
    });
  }

  ngOnInit() {
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
