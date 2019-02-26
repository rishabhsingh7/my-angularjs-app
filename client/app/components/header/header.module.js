import angular from 'angular';
import HeaderComponent from './header.component';

let HeaderModule = angular.module('header', [])
    .component('header', HeaderComponent);

export default HeaderModule;
