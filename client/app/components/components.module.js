import angular from 'angular';

import HeaderModule from './header/header.module';
import FooterModule from './footer/footer.module';
import HomeModule from './home/home.module';
import AboutModule from './about/about.module';

let ComponentsModule = angular.module('app.components', [
    HeaderModule.name,
    FooterModule.name,
    HomeModule.name,
    AboutModule.name
]);

export default ComponentsModule;
