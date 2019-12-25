
// angular stuff
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

// other modules
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core.routing';

// services
import { ConstantsService } from './services/constants.service';
import { NavService } from './services/navigation.service';
import { HeaderService } from './services/header.service';
import { MenuService } from './services/menu.service';
import { SoundService } from './services/sound.service';
import { LogService } from './services/log.service';
import { LocalStorageService } from './services/local-storage.service';
import { SessionStorageService } from './services/session-storage.service';
import { ProxyService } from './services/proxy.service';
import { FullScreenService } from './services/full-screen.service';
import { XlsxService } from './services/xlsx.service';
import { ContentService } from './services/content.service';

// components
import { WindowComponent } from './components/window/window.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuButtonComponent } from './components/header/menu-button/menu-button.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';

// apps that need to be initialized when angular initializes
// use appOnInit() instead of the custructor for non-static code
import { IAppInitService } from './core.types';
import { HeaderLinkComponent } from './components/header/header-link/header-link.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    WindowComponent,
    HeaderComponent,
    ContentComponent,
    MenuComponent,
    MenuButtonComponent,
    MenuItemComponent,
    SettingsButtonComponent, HeaderLinkComponent,
  ],
  providers: [
    ConstantsService,
    HeaderService,
    MenuService,
    LocalStorageService,
    SessionStorageService,
    ProxyService,
    XlsxService,
    SoundService,
    {
      provide: APP_INITIALIZER,
      useFactory: (instance: FullScreenService) => {
        // console.log(instance, FullScreenService);
        return () => instance.appOnInit();
      },
      deps: [FullScreenService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (instance: LogService) => {
        // console.log(instance, LogService);
        return () => instance.appOnInit();
      },
      deps: [LogService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (instance: ContentService) => {
        // console.log(instance, ScrollService);
        return () => instance.appOnInit();
      },
      deps: [ContentService],
      multi: true
    },
    NavService
    // {
    //   // this guy kept coming up as null / undefined when running
    //   provide: APP_INITIALIZER,
    //   useFactory: (instance: NavService) => {
    //     console.log(instance, NavService);
    //     return instance ? () => instance.appOnInit() : () => {};
    //   },
    //   deps: [NavService, MenuService, SoundService, MenuService, ScrollService],
    //   multi: true
    // }
  ],
  exports: [
    WindowComponent
  ]
})
export class CoreModule { }
