import { Directive, Output, HostListener, EventEmitter } from '@angular/core';

// this isn't really used, but can be

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Output() isHovered = new EventEmitter<boolean>();

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered.emit(true);
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered.emit(false);
  }
 
  constructor() { }

}
