import angular from 'angular';

import HeaderModule from './header/header.module';
import FooterModule from './footer/footer.module';
import HomeModule from './home/home.module';
import AboutModule from './about/about.module';
import PostsModule from './posts/posts.module';
import CommentsModule from './comments/comments.module';
import CommonModule from './common/common.module';

let ComponentsModule = angular.module('app.components', [
    HeaderModule.name,
    FooterModule.name,
    HomeModule.name,
    AboutModule.name,
    PostsModule.name,
    CommentsModule.name,
    CommonModule.name
]);

export default ComponentsModule;
