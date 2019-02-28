class PostsCtrl {
    constructor($log, postsService) {
        'ngInject';

        $log.log('Inside Posts Controller');
        this.$log = $log
        this.postsService = postsService;
        this.numPerPage = 10;
        this.currentPage = 1;
    }

    getPosts(userId) {
        this.postsService.getPosts(userId)
            .then(res => {
                this.posts = res;
                this.totalPosts = this.posts.length;
                this.$log.log(`${this.totalPosts} posts fetched.`);
                this.pageChanged();
            },
            err => {
                this.$log.error(err);
            });
    }

    pageChanged() {
        this.begin = (this.currentPage - 1) * this.numPerPage;
        this.end = this.begin + this.numPerPage;
        this.slicedPosts = this.posts.slice(this.begin, this.end);
    }

}

export default PostsCtrl;
