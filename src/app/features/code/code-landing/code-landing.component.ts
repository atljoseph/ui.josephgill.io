import { Component, OnInit } from '@angular/core';

import { NavService } from 'src/app/core/services/navigation.service';
import { ResponsiveImageService } from 'src/app/core/services/responsive-image.service';

import { codeArticles } from '../code.utils';
import { CodeArticle } from '../code.model';

@Component({
  // selector: 'app-code-landing',
  templateUrl: './code-landing.component.html',
  styleUrls: ['./code-landing.component.scss']
})
export class CodeLandingComponent implements OnInit {

  codeArticles: CodeArticle[] = codeArticles;

  constructor(
    private nav: NavService,
    public responsiveimage: ResponsiveImageService,
  ) { }

  ngOnInit() {
    // console.log(codeArticles);
  }

  openArticle(articleSelected: CodeArticle) {
    articleSelected.isHovered = false;
    this.nav.go(`/code/${articleSelected.routeKey.trim().toLowerCase()}`);
  }

  articleTrackBy(index, article: CodeArticle) { return index + article.routeKey; }

}
