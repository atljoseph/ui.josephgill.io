import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  isTransparent: boolean = true;
  title: string = null;

  constructor() { }

  setTitle(text: string): void {
    this.title = text;
  }

  clearTitle() {
    this.title = null;
  }

  get isTitleExists() {
    return true;
    // return this.title !== null && this.title !== '';;
  }
}
