export const DEMO_SJSONC = `{
    // 属性带双引号
    "code": 0,
    // 属性带单引号
    'data': { 
        /** 
         * 多行注释 
         * 多行注释
         */
        list: [{
            name: 'hello', // 属性不带引号
            age: 18
        }, {
            name: "world",
            age: 16,
            nickName: 'lucky' // 尾部单行注释
        }]
    }
}`;