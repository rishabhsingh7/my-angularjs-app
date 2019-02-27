class HeaderCtrl {
    constructor($state) {
        'ngInject';

        this.$state = $state;
    }

    isActive = (state) => this.$state.current.name === state ? true : false;

}

export default HeaderCtrl;
