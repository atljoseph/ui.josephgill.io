import { filter, debounceTime } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router, NavigationStart, RouterOutlet } from '@angular/router';

import { environment } from '../../../environments/environment';

import { IAppInitService } from '../core.types';

import { MenuService } from './menu.service';
import { LogService } from './log.service';
import { SoundService } from './sound.service';
import { ContentService } from './content.service';

@Injectable({
  providedIn: 'root'
})
export class NavService implements IAppInitService {

  logHandle: string = 'NavigationService';
  // animationState: string;
  animationDelayDefault: number = 400;
  url: string;

  constructor(
    private router: Router,
    private menu: MenuService,
    private logger: LogService,
    private sound: SoundService,
    private content: ContentService,
  ) {
    this.logger.log('constructor()', 'NavService', {});
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart),
      debounceTime(1)
    ).subscribe(
      (navStartEvent: NavigationStart) => {
        this.logger.log('Reporting a Navigation Event', this.logHandle, { navStartEvent, url: navStartEvent.url });
        this.url = navStartEvent.url;
      });
  }

  appOnInit() {

  }

  go(route: string, delayOverride?: number): void {
    this.logger.log('Navigating to route.', this.logHandle, { route, delayOverride });
    // this.sound.play('pew.mp3', 0.5);
    this.sound.play('cowboy-spurs.mp3', 0.1);
    this.content.scrollSmoothToTop();
    setTimeout(() => {
      this.menu.hide();
      // this.content.scrollToTop();
      this.router.navigate([route]);
    }, delayOverride || this.animationDelayDefault);
  }

  isRouteSelected(routeFragment: string, matchType: string): boolean {
    if (this.url) {
      // const splitUrl = this.url.split('/');
      if (matchType === 'like') {
        return this.url.toLowerCase().includes(`/${routeFragment.toLowerCase()}`)
      }
      if (matchType === 'exact') {
        return this.url.toLowerCase() === `/${routeFragment.toLowerCase()}`;
      }
      return false;
    }
  }

  isHiddenRoute(route: string): boolean {
    return environment.hiddenRoutes.indexOf(route) > -1;
  }

  animationState(routerOutlet: RouterOutlet): string {
    return routerOutlet.isActivated ? routerOutlet.activatedRoute.snapshot.routeConfig.path : 'hey, there!';
  }
}
