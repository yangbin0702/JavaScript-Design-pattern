/**
 * Created by Administrator on 2016/10/6.
 */
/*使用这个模式来实现购物车*/
var basketModule = (function(){
    var basket = [];
    function doSomethingPrivate(){

    };

    function doSomethingElesePrivate(){

    };

    return {
        addItem: function(values){
            basket.push(values);
        },
        getItemCount: function(){
            return basket.length;
        },
        getTotal: function(){
            var itemCount = this.getItemCount(),
                total = 0;
            while(itemCount--){
                total +=basket[itemCount].price;
            }
            return total;
        }
    }
})();

basketModule.addItem({
    item:'butter',
    price:0.3
});
basketModule.addItem({
    item:'bread',
    price:0.5
});
console.log(basketModule.getItemCount());

console.log(basketModule.getTotal());
