class TagsCtrl {
    constructor() {}

    $onInit() {
        console.log(`Max tags: ${this.maxTags}`);
        this.tags = [];
    }

    attachEventHandlers($elem) {
        $elem.on('keypress', (e) => {
            let key = e.which;
            if (key == 13) this.enterPressed($elem);
        });
    }

    enterPressed($elem) {
        let tag = $elem.val();
        this.tags.push({tag});
        console.log(JSON.stringify(this.tags));
        this.parentScope.$apply();
        $elem.val('');
        if (this.maxTags && this.tags.length == this.maxTags) $elem.prop('disabled', true);
    }

}

export default TagsCtrl;
