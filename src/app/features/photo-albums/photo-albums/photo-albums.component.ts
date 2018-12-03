import { Component, OnInit, OnDestroy, ElementRef, QueryList, ViewChildren, ViewChild, ContentChild } from '@angular/core';

import { HeaderService } from '../../../core/services/header.service';
import { ContentService } from '../../../core/services/content.service';
import { NavService } from 'src/app/core/services/navigation.service';

import { IPhoto, IPhotoGroup } from '../photo-albums.types';
import { PhotoAlbum } from '../photo-album.model';
import { photoAlbumsData } from '../photo-albums.data';
import { 
  photoAlbums,
  imgSrc, imgSrcTest,
  imgSrcSet, imgSrcSetTest 
} from '../photo-albums.utils';

@Component({
  // selector: 'app-photo-albums',
  templateUrl: './photo-albums.component.html',
  styleUrls: ['./photo-albums.component.scss']
})
export class PhotoAlbumsComponent implements OnInit {

  photoAlbums: PhotoAlbum[] = photoAlbums;

  constructor(
    private header: HeaderService,
    private content: ContentService,
    private nav: NavService
    ) { 
  }

  ngOnInit() {}

  openAlbum(albumSelected: PhotoAlbum) {
    this.nav.go(`/photo-albums/${albumSelected.key.trim().toLowerCase()}`);
  }

  albumTrackBy(index, album: PhotoAlbum) { return index + album.key; }

  photoTrackBy(index, photo: IPhoto) { return index + photo.src; }

  imgSrcSet(src: string): string { return imgSrcSet(src); }

  imgSrcSetTest(src: string): string { return imgSrcSetTest(src); }

  imgSrc(src: string): string { return imgSrc(src); }

  imgSrcTest(src: string): string { return imgSrcTest(src); }

}
