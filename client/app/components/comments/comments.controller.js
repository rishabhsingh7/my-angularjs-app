import _ from 'lodash';

import modalTemplate from './comments.modal.html';

class CommentsCtrl {
    constructor($log, $uibModal, $stateParams, $state, $filter, commentsService) {
        'ngInject';

        $log.log('Inside Comments Controller');
        this.$log = $log;
        this.$uibModal = $uibModal;
        this.$state = $state;
        this.$filter = $filter;
        this.commentsService = commentsService;
        this.comments = [];
        this.numPerPage = 50;
        this.$stateParams = $stateParams;
        $log.info(`Current page: ${this.currentPage}`);
        this.getComments();
    }

    getComments() {
        this.commentsService.getComments()
            .then(res => {
                this.comments = res;
                this.totalComments = this.comments.length;
                this.$log.log(`${this.totalComments} comments fetched`);
                this.currentPage = this.$stateParams.page;
                this.pageChanged(this.comments);
            }, err => {
                this.$log.error(err);
            });
    }

    pageChanged(comments) {
        this.begin = (this.currentPage - 1) * this.numPerPage;
        this.end = this.begin + this.numPerPage;
        this.slicedComments = comments.slice(this.begin, this.end);
    }

    gotoPage(page) {
        this.$log.log(`Go to page ${page}`);
        this.$state.go('.', {page: page});
    }

    openComment(comment) {
        let modalInstance = this.$uibModal.open({
            animation: true,
            template: modalTemplate,
            controller: ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
                $scope.title = comment.name;
                $scope.body = comment.body;

                $scope.ok = () => {
                    $uibModalInstance.close();
                };
            }]
          });

          modalInstance.result.then(() => {}, () => {
              this.$log.log('Modal closed');
          });
    }

    filter(filterText) {
        let filteredComments = this.$filter('filter')(this.comments, filterText);
        this.totalComments = filteredComments.length;
        this.pageChanged(filteredComments);
    }
}

export default CommentsCtrl;
