import * as common from './environment.common';

export const environment = {
  ...common,
  production: true,
  envCode: '',
  enableLogging: false,
  hiddenRoutes: ['examples', 'music', 'photo-albums']
};
