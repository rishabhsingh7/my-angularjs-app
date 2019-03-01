import TagsCtrl from './tags.controller';

class TagsDirective {
    constructor() {
        console.log('TagsDirective initialized');
        return {
            restrict: 'A',
            bindToController: {
                maxTags: '@',
                tags: '='
            },
            controller: TagsCtrl,
            controllerAs: 'vm',
            link: ($scope, $elem, $attrs, vm) => {
                vm.parentScope = $scope;
                vm.attachEventHandlers($elem);
            }
        };
    }
}

export default TagsDirective;
