import { Component, OnInit, OnDestroy, ElementRef, QueryList, ViewChildren, ViewChild, ContentChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeaderService } from '../../../core/services/header.service';
import { ContentService } from '../../../core/services/content.service';
import { LogService } from 'src/app/core/services/log.service';
import { NavService } from 'src/app/core/services/navigation.service';

import { IPhoto, IPhotoGroup } from '../photo-albums.types';
import { PhotoAlbum } from '../photo-album.model';

import { 
  photoAlbumByKey, 
  imgSrc, imgSrcTest,
  imgSrcSet, imgSrcSetTest 
} from '../photo-albums.utils';

interface IPhotoAlbumParams {
  photoAlbumKey: string;
}

@Component({
  // selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit {

  // // @ViewChildren('imgResponsive') images: QueryList<ElementRef>;
  // @ViewChild('imgResponsive', {read: ElementRef}) image: ElementRef;
  // @ViewChildren('imgResponsive', {read: ElementRef}) images: QueryList<ElementRef>;
  handleId: string = 'PhotoAlbumComponent';
  photoAlbum: PhotoAlbum;

  constructor(
    private header: HeaderService,
    private content: ContentService,
    private logger: LogService,
    private route: ActivatedRoute,
    private nav: NavService

  ) { 
    this.route.params.subscribe((params: IPhotoAlbumParams) => {
      const photoAlbum = photoAlbumByKey(params.photoAlbumKey);
      this.logger.log('route.params.subscribe()', this.handleId, { params, photoAlbum });
      if (!photoAlbum) return this.nav.go('photo-albums');
      else this.photoAlbum = photoAlbum;
    });
  }

  ngOnInit() { }

  groupTrackBy(index, group: IPhotoGroup) { return index + group.title; }

  photoTrackBy(index, photo: IPhoto) { return index + photo.src; }

  imgSrcSet(src: string): string { return imgSrcSet(src); }

  imgSrcSetTest(src: string): string { return imgSrcSetTest(src); }

  imgSrc(src: string): string { return imgSrc(src); }

  imgSrcTest(src: string): string { return imgSrcTest(src); }

}
