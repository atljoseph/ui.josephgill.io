import { Component, OnInit } from '@angular/core';

import { LogService } from 'src/app/core/services/log.service';
import { NavService } from 'src/app/core/services/navigation.service';
import { ResponsiveImageService } from 'src/app/core/services/responsive-image.service';

import { PhotoAlbum } from '../../../core/models/photo-album.model';

@Component({
  // selector: 'app-photo-albums',
  templateUrl: './photo-albums.component.html',
  styleUrls: ['./photo-albums.component.scss']
})
export class PhotoAlbumsComponent implements OnInit {
  handleId: string = 'PhotoAlbumsComponent';

  constructor(
    private nav: NavService,
    public responsiveimage: ResponsiveImageService,
    private logger: LogService,
    ) { 
      
  }

  ngOnInit() {
    
  }

  get photoAlbums$() { return this.responsiveimage.photoAlbumsObservable; } 

  openAlbum(albumSelected: PhotoAlbum) {
    albumSelected.isHovered = false;
    this.nav.go(`/photo-albums/${albumSelected.routeKey.trim().toLowerCase()}`);
  }

  albumTrackBy(index, album: PhotoAlbum) { return index + album.routeKey; }

}
