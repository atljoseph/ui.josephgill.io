import {
    Component,
    ElementRef,
    HostListener,
    AfterViewInit
  } from '@angular/core';
  
  //(mouseenter)="isGradientVisible = true" (mouseleave)="isGradientVisible = false"
  @Component({
    selector: 'app-shared-hover-button',
    template: `
      <span class="content" [ngStyle]="hoverContentStyle">
        <ng-content></ng-content>
      </span>
    
    `,
    styles: [
      ``
    ]
  })
  export class HoverButtonComponent implements AfterViewInit {
    isGradientVisible = false;
  
    constructor(public el: ElementRef<HTMLElement>) {}

    get hoverContentStyle() {
      return this.isGradientVisible ? {
        // 'color':'red',
        'box-shadow': '0 1px 5px 5px rgba(0,0,0,0.1)',
        'transform': 'scale(2)',
        'transition': 'all .5s ease-in-out',
      } : {};
    }

    @HostListener('mouseenter')
    onMouseEnter() {
      this.isGradientVisible = true;
    }
  
    @HostListener('mouseleave')
    onMouseLeave() {
      this.isGradientVisible = false;
    }
  
    ngAfterViewInit() {
      // console.log(JSON.stringify(this.el.nativeElement.clientWidth, null, 4));
      // this.gradientRadius = this.el.nativeElement.clientWidth;//getBoundingClientRect().width;
    }
  }