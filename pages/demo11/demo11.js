// pages/demo11/demo11.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        html: [
            {
                name: 'div',
                attrs: {
                    class: 'my_div',
                    style: 'color:red'
                },
                children: [
                    {
                        name: 'p',
                        attrs: {},
                        children: [{
                            type: 'text',
                            text: 'hellow'
                        }]
                    }
                ]
            }
        ]
    },

})