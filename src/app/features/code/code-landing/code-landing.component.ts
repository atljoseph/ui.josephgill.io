import { Component, OnInit } from '@angular/core';

import { NavService } from 'src/app/core/services/navigation.service';
import { ResponsiveImageService } from 'src/app/core/services/responsive-image.service';

import { CodeArticle } from '../../../core/models/code.model';
import { map } from 'rxjs/operators';
import { ContentService } from 'src/app/core/services/content.service';

@Component({
  // selector: 'app-code-landing',
  templateUrl: './code-landing.component.html',
  styleUrls: ['./code-landing.component.scss']
})
export class CodeLandingComponent implements OnInit {

  constructor(
    private nav: NavService,
    public responsiveimage: ResponsiveImageService,
    private content: ContentService,
  ) { }

  ngOnInit() {
    // console.log(codeArticles);
    this.responsiveimage.getCodeArticles(() => {
      setTimeout(() => this.content.scrollTick(1), 500)
    })
  }

  get codeArticles$() { 
    return this.responsiveimage.codeArticlesObservable;
  } 


  openArticle(articleSelected: CodeArticle) {
    articleSelected.isHovered = false;
    this.nav.go(`/random/${articleSelected.routeKey.trim().toLowerCase()}`);
  }

  articleTrackBy(index, article: CodeArticle) { return index + article.routeKey; }

}
