import angular from 'angular';

import FooterComponent from './footer.component';

let FooterModule = angular.module('footer', [])
    .component('footer', FooterComponent);

export default FooterModule;
