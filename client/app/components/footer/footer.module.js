import angular from 'angular';

import FooterComponent from './footer.component';

let FooterModule = angular.module('footer', [])
    .component('myFooter', FooterComponent);

export default FooterModule;
