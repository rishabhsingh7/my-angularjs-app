import angular from 'angular';

import TagsDirective from './tags/tags.directive';
import Tags2Directive from './tags2/tags2.directive';

let CommonModule = angular.module('common', [])
    .directive('myTags', () => new TagsDirective())
    .directive('myNewTags', () => new Tags2Directive());

export default CommonModule;
