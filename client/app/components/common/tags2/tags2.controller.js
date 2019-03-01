import _ from 'lodash';

class Tags2Ctrl {
    constructor($scope) {
        'ngInject';

        this.$scope = $scope;
        this.tags = [];
        $scope.$watch(this.tags, () => $scope.tagsUpdated({tags2: this.tags}));
    }

    addTag() {
        this.tags.push({tag: this.tagInput});
        this.tagInput = '';
        this.$scope.$apply();
        console.log(JSON.stringify(this.tags));
    }

    removeTag(tag) {
        _.remove(this.tags, tag);
        console.log(JSON.stringify(this.tags));
    }
}

export default Tags2Ctrl;
