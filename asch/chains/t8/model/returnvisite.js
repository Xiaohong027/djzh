module.exports = {
    name: 'returnVisites',
    fields: [
        //回访id
        {
            name: 'return_visite_id',
            type: 'String',
            length: 32,
            not_null: true,
            index: true,
            primary_key: true
        },
        //文章id
        {
            name: 'article_id',
            type: 'String',
            length: 32,
            not_null: true,
            foreign_key: true
        },
        //记录事件的交易id
        {
            name: 'tid',
            type: 'String',
            length: 64,
            not_null: true
        },
        //用户id
        {
            name: 'uid',
            type: 'String',
            length: 32,
            not_null: true,
            foreign_key: true
        },
        //时间戳
        {
            name: 'rv_timestamp',
            type: 'Number',
            not_null: true
        },
        //回访正文
        {
            name: 'rv_text',
            type: 'String',
            length: 256,
            not_null: true
        },
        //标志位
        {
            name: 'flag',
            type: 'Number',
            not_null: true,
            default: 0
        }
    ]
}
