
# josephgill.io

This is my website's UI code. You can visit it at http://josephgill.io :)

## Install Dependencies 

`npm install -g @angular/cli`

`npm install`

## Build / Run for Development

Run `npm start` or `ng serve` to serve the app on the local machine.
Should be up and running on the host & port defined in `angular.json` (see the note below):

You might want to edit the angular.json file
```
        ...,
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "jgApp:build",
            "host": "1.2.3.4",      <=== THIS can be set to your local IP address.
            "port": 4200            <=== THIS can be used to cutomize the port
          },
          "configurations": {
            ...
          }
        },
        ...
```
You can also run `npm run startProd` or `ng s --prod` to serve the app in prod mode locally.

## Publish a Deployment Package

Run `npm run build` or `ng build` to build the project, or `npm run buildProd` or `ng build --prod` to build in prod mode.

## Running unit / end-to-end tests

Tests ... what tests? 
None needed at the moment. Not complicated enough, yet.
