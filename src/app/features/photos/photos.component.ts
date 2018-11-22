import { Component, OnInit, OnDestroy } from '@angular/core';

import { HeaderService } from '../../core/services/header.service';

interface IPhoto {
  description?: string;
  src: string;
}

interface IPhotoGroup {
  title: string;
  photos: IPhoto[];
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnDestroy {

  photoGroups: IPhotoGroup[] = [
    {
      title: 'Candler:',
      photos: [
        { src: 'resized/candler-umbrella-deer.jpg' },
        { src: 'resized/candler-bridge-fist-up.jpg' },
        { src: 'resized/brownie-monster.jpg' },
        { src: 'resized/candler-bridge-pose-1.jpg' },
        { src: 'resized/candler-bridge-pose-2.jpg' },
        { src: 'resized/candler-bridge-pose-3.jpg' },
        { src: 'resized/candler-glasses-laughing.jpg' },
        { src: 'resized/candler-piano-alone.jpg' },
        { src: 'resized/candler-piano-snoopy.jpg' },
        { src: 'resized/candler-trains-on-floor.jpg' },
        { src: 'resized/candler-train-sylvester.jpg' },
        { src: 'resized/candler-cracker-barrel.jpg' },
      ]
    },
    {
      title: 'Grandy:',
      photos: [
        { src: 'resized/candler-grandy-blowing-bubbles.jpg' },
        { src: 'resized/candler-grandy-train-marietta.jpg' },
        { src: 'resized/candler-grandy-cracker-barrel-1.jpg' },
        { src: 'resized/candler-grandy-cracker-barrel-2.jpg' },
        { src: 'resized/candler-grandy-swing.jpg' },
      ]
    },
    {
      title: 'Papa:',
      photos: [
        { src: 'resized/candler-papa-train-agrirama.jpg' },
        { src: 'resized/candler-papa-train-marietta.jpg' },
      ]
    },
    {
      title: 'Grandy & Papa:',
      photos: [
        { src: 'resized/grandy-and-papa.jpg' },
        { src: 'resized/candler-grandy-papas-house.jpg' },
      ]
    },
    {
      title: 'Amy & Family:',
      photos: [
        { src: 'resized/amy-xinh-dep.jpg' },
        { src: 'resized/candler-and-ngan.jpg' },
        { src: 'resized/eva-ngan-amy-candler-uncle.jpg' },
        { src: 'resized/eva-and-uncle.jpg' },
        { src: 'resized/eva-and-grandfather.jpg' },
      ]
    },
    {
      title: 'Random:',
      photos: [
        { description: 'Eclipse 2017', src: 'resized/eclipse-2017.jpg' },
      ]
    },
    {
      title: 'Daddy:',
      photos: [
        { src: 'resized/daddy-looking-at-phone.jpg' },
      ]
    }
  ];

  constructor(
    private header: HeaderService
  ) { 
    // this.header.setTitle('Photos');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // this.header.clearTitle();
  } 

  groupTrackBy(index, group: IPhotoGroup) {
    return index + group.title;
  }

  photoTrackBy(index, photo: IPhoto) {
    return index + photo.src;
  }

}
