function routesConfig($urlRouterProvider, $stateProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('app', {
        abstract: true
    })
    .state('app.home', {
        url: '/',
        component: 'home'
    })
    .state('app.about', {
        url: '/about',
        component: 'about'
    });
}

export default routesConfig;
