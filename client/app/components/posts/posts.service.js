class PostsService {
    constructor($log, $http) {
        'ngInject';

        this.$log = $log;
        this.$http = $http;
    }

    getPosts() {
        this.$log.log('Getting Posts..');
        return this.$http.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.data);
    }

}

export default PostsService;
