class PostsCtrl {
    constructor($log, PostsService) {
        'ngInject';

        $log.log('Inside Posts Controller');
        this.$log = $log
        this.PostsService = PostsService;
        this.getPosts();
        this.numPerPage = 10;
        this.currentPage = 1;
    }

    getPosts() {
        this.PostsService.getPosts()
            .then(res => {
                this.$log.log(`${res.length} posts fetched.`);
                this.posts = res;
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
