import angular from 'angular';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import AppComponent from './app.component';
import routeConfig from './app.routes';
import ComponentsModule from './components/components.module';

angular.module('app', [
    uiRouter,
    uiBootstrap,
    ComponentsModule.name
])
.component('app', AppComponent)
.config(routeConfig);

angular.bootstrap(document, ['app'], {
    strictDi: true
});
