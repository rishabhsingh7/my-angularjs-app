import template from './tags2.template.html';
import './tags2.scss';
import Tags2Ctrl from './tags2.controller';

class Tags2 {
    constructor() {
        return {
            retrict: 'E',
            template,
            scope: {
                tagsUpdated: '&'
            },
            controller: Tags2Ctrl,
            controllerAs: 'vm',
            link: ($scope, $elem, $attrs, vm) => {
                $elem.on('keypress', (e) => {
                    let key = e.which;
                    if (key === 13) vm.addTag();
                })
            }
        };
    }
}

export default Tags2;
