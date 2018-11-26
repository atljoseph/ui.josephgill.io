import { Injectable } from '@angular/core';

import { IAppInitService } from '../core.types';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogService implements IAppInitService {

  logHandle: string = 'LogService';

  appOnInit() {
    this.log(`appOnInit()`, this.logHandle, {});
    this.log(`environment: ${environment.envCode}`, this.logHandle);
  }

  // info(message: string, trace?:string, data?: any) {
  //   const obj = { trace, message, data };
  //   if (environment.enableLogging) console.info(obj);
  // }

  log(message: string, trace?:string, data?: any, stringify?: boolean) {
    const obj = { trace, message, data: !stringify ? data : JSON.stringify(data, null, 4) };
    if (environment.enableLogging) console.log(obj);
  }

  // warn(message: string, trace?:string, exception?: any) {
  //   const obj = { trace, message, exception };
  //   if (environment.enableLogging) console.warn(obj);
  // }

  error(message: string, trace?:string, exception?: any) {
    const obj = { trace, message, exception };
    console.error(obj); // always log errors
  }
}
