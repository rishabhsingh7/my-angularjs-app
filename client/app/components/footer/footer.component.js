import template from './footer.component.html';
import './footer.component.scss';
import FooterCtrl from './footer.controller';

let FooterComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller: FooterCtrl
};

export default FooterComponent;
