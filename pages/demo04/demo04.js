Page({

    /**
     * 页面的初始数据
     */
    data: {
        num: 0
    },
    handelInput(e){
        console.log(e.detail.value)
        this.setData({
            num:e.detail.value
        })
    }
    ,handelTap(e){
        console.log(e)
        const operation = e.currentTarget.dataset.operation
        this.setData({
            num:this.data.num + operation
        })
    }
})