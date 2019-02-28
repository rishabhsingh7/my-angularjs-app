import angular from 'angular';

import pagination from 'angular-ui-bootstrap/src/pagination';
import uibModal from 'angular-ui-bootstrap/src/modal';

import CommentsComponent from './comments.component';
import CommentsService from './comments.service';

let CommentsModule = angular.module('comments', [pagination, uibModal])
    .component('comments', CommentsComponent)
    .service('commentsService', CommentsService);

export default CommentsModule;
