
module.exports = {
    postArticle: async function (title, text, tag) {
        
        app.sdb.create('article', {
            a_title: title,
            a_text: text,
            tag: tag,
            article_id: app.autoID.increment('article_max_id'),
            tid: this.trs.id,
            uid: this.trs.senderId,
            a_timestamp: this.trs.timestamp
        });
        app.balances.transfer(INTERNAL_CURRENCY, POST_ARTICLE_AUTHOR_REWARD_TOKEN, SYSTEM_ADDRESS, this.trs.senderId)
    }
};