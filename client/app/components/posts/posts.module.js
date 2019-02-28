import angular from 'angular';

import accordion from 'angular-ui-bootstrap/src/accordion';
import pagination from 'angular-ui-bootstrap/src/pagination';

import PostsComponent from './posts.component';
import PostsService from './posts.service';

let PostsModule = angular.module('posts', [accordion, pagination])
    .component('posts', PostsComponent)
    .service('postsService', PostsService);

export default PostsModule;
