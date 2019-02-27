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
    })
    .state('app.posts', {
        url: '/posts',
        component: 'posts'
    });
}

export default routesConfig;
