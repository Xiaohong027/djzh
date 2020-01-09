module.exports = {
  name: 'articles',
  fields: [
    //文章id
    {
      name: 'article_id',
      type: 'String',
      length: 32,
      not_null: true,
      index: true,
      primary_key: true
    },
    //用户id
    {
      name: 'uid',
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
      not_null: true,
    },
    //时间戳
    {
      name: 'a_timestamp',
      type: 'Number',
      not_null: true,
    },
    //文章标题
    {
      name: 'a_title',
      type: 'String',
      length: 256,
      not_null: true
    },
    //文章正文
    {
      name: 'a_text',
      type: 'String',
      length: 1024,
      not_null: true
    },
    //标签
    {
      name: 'tag',
      type: 'String',
      length: 32,
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
