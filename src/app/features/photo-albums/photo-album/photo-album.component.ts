import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LogService } from 'src/app/core/services/log.service';
import { NavService } from 'src/app/core/services/navigation.service';
import { ResponsiveImageService } from 'src/app/core/services/responsive-image.service';

import { IPhoto, IPhotoGroup } from '../../../core/models/photo-albums.types';
import { PhotoAlbum } from '../../../core/models/photo-album.model';
import { HttpClient } from '@angular/common/http';

import { Subscription, combineLatest } from 'rxjs';

interface IPhotoAlbumParams {
  photoAlbumKey: string;
}

@Component({
  // selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit, OnDestroy {

  // // @ViewChildren('imgResponsive') images: QueryList<ElementRef>;
  // @ViewChild('imgResponsive', {read: ElementRef}) image: ElementRef;
  // @ViewChildren('imgResponsive', {read: ElementRef}) images: QueryList<ElementRef>;
  handleId: string = 'PhotoAlbumComponent';
  photoAlbum: PhotoAlbum;
  subscriptions: Subscription =  new Subscription();

  constructor(
    private logger: LogService,
    private route: ActivatedRoute,
    private nav: NavService,
    private httpClient: HttpClient, 
    public responsiveimage: ResponsiveImageService,
  ) { 
    this.subscriptions.add(
      combineLatest(this.route.params, this.responsiveimage.photoAlbumsObservable)
        .subscribe(([params, albums]) => {
          const photoAlbum = this.photoAlbumByKey(albums, params.photoAlbumKey);
          this.logger.log('combineLatest(this.route.params, this.content.photoAlbumsObservable).subscribe()', this.handleId, { params, photoAlbum });
          if (!photoAlbum) return this.nav.go('photo-albums');
          else this.photoAlbum = photoAlbum;

        })
    );
  }

  photoAlbumByKey(albums: PhotoAlbum[], routeKey: string): PhotoAlbum {
    return albums.find((album) => {
      return album.routeKey.trim().toLowerCase() === routeKey.trim().toLowerCase();
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  groupTrackBy(index, group: IPhotoGroup) { return index + group.title; }

  photoTrackBy(index, photo: IPhoto) { return index + photo.src; }

}
