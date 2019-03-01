import angular from 'angular';

import TagsDirective from './tags/tags.directive';

let CommonModule = angular.module('common', [])
    .directive('myTags', () => new TagsDirective());

export default CommonModule;
