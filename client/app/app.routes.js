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
    })
    .state('app.comments', {
        url: '/comments?page',
        component: 'comments',
        params: {
            page: {
                value: '1',
                squash: true
            }
        }
    });
}

export default routesConfig;
