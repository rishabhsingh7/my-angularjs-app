import template from './header.component.html';
import './header.component.scss';
import HeaderCtrl from './header.controller';

let HeaderComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller: HeaderCtrl
};

export default HeaderComponent;
