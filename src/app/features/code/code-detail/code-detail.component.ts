import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LogService } from 'src/app/core/services/log.service';
import { NavService } from 'src/app/core/services/navigation.service';
import { ResponsiveImageService } from 'src/app/core/services/responsive-image.service';

import { ICodeContent, ICodePhoto, ICodeBlock } from '../code.types';
import { CodeArticle } from '../code.model';
import { codeArticleByKey } from '../code.utils';

interface ICodeDetailRouteParams {
  articleKey: string;
}

@Component({
  // selector: 'app-tip',
  templateUrl: './code-detail.component.html',
  styleUrls: ['./code-detail.component.scss']
})
export class CodeDetailComponent implements OnInit {

  handleId: string = 'PhotoAlbumComponent';
  codeArticle: CodeArticle;

  constructor(
    private logger: LogService,
    private route: ActivatedRoute,
    private nav: NavService,
    public responsiveimage: ResponsiveImageService,

  )  { 
    this.route.params.subscribe((params: ICodeDetailRouteParams) => {
      const codeArticle = codeArticleByKey(params.articleKey);
      this.logger.log('route.params.subscribe()', this.handleId, { params, codeArticle });
      if (!codeArticle) return this.nav.go('code');
      else this.codeArticle = codeArticle;
    });
  }

  ngOnInit() {
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
