import angular from 'angular';

import AboutComponent from './about.component';

let AboutModule = angular.module('about', [])
    .component('about', AboutComponent);

export default AboutModule;
