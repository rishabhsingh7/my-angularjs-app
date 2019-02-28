class PostsService {
    constructor($log, $http) {
        'ngInject';

        this.$log = $log;
        this.$http = $http;
    }

    getPosts(userId) {
        this.$log.log('Getting Posts..');
        return this.$http.get('https://jsonplaceholder.typicode.com/posts', {
            params: {userId}
        }).then(res => res.data);
    }

}

export default PostsService;
