
# josephgill.io

This is my website's UI code. You can visit it at http://josephgill.io :)
NOTE: For Windows users, please use `Git Bash`!

## Install Dependencies 

### Install UI Project

`git clone https://github.com/atljoseph/ui.josephgill.io.git`

`npm install -g @angular/cli`

`npm install`

### Install Assets into UI Project 

Run this to clone the correct asset repo and install the processed assets: `npm run assets`

## Run for Development

Run `npm start` or `ng serve` to serve the app on the local machine.
Should be up and running on the host & port defined in `angular.json` (see the note below):

### Development Server Host IP

You might want to edit the angular.json file
"host" can be "0.0.0.0" (for localhost), or whatever your local IP address is ...

```
        ...,
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "ui.josephgill.io:build",
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

## Build the project

Run `npm run build` or `ng build` to build the project, or `npm run buildProd` or `ng build --prod` to build in prod mode.

## Webserver config

This site is hosted on NGINX, and example config files can be provided upon request.

## Running unit / end-to-end tests

Tests ... what tests? 
None needed at the moment. Not complicated enough, yet.
