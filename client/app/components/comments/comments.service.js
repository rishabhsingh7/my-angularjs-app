class CommentsService {
    constructor($log, $http) {
        'ngInject';

        this.$log = $log;
        this.$http = $http;
    }

    getComments() {
        this.$log.log('Getting Comments..');
        return this.$http.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.data);
    }
}

export default CommentsService;
