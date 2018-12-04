import { Component, OnInit } from '@angular/core';

import { NavService } from 'src/app/core/services/navigation.service';
import { ResponsiveImageService } from 'src/app/core/services/responsive-image.service';

import { PhotoAlbum } from '../photo-album.model';
import { photoAlbums } from '../photo-albums.utils';

@Component({
  // selector: 'app-photo-albums',
  templateUrl: './photo-albums.component.html',
  styleUrls: ['./photo-albums.component.scss']
})
export class PhotoAlbumsComponent implements OnInit {

  photoAlbums: PhotoAlbum[] = photoAlbums;

  constructor(
    private nav: NavService,
    public responsiveimage: ResponsiveImageService,
    ) { 
  }

  ngOnInit() {}

  openAlbum(albumSelected: PhotoAlbum) {
    this.nav.go(`/photo-albums/${albumSelected.routeKey.trim().toLowerCase()}`);
  }

  albumTrackBy(index, album: PhotoAlbum) { return index + album.routeKey; }

}
