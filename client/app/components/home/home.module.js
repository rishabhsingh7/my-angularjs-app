import angular from 'angular';

import HomeComponent from './home.component';

let HomeModule = angular.module('home', [])
    .component('home', HomeComponent);

export default HomeModule;
