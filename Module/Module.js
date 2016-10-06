/**
 * Created by Administrator on 2016/10/6.
 */
/*Module模式可以用闭包实现私有和公有的方法
* 函数返回的是一个对象
*
* 这个可以通过闭包来实现
* */
var testModule = (function(){
    //私有变量
    var count = 0;
    //私有方法
    var hello = function(){
        console.log("hello world");
    }
    return {
        //公有方法
        incrementCounter: function(){
            return ++count;
        },
        //公有方法
        resetCounter: function(){
            console.log('Counter value prior to reset:' + count);
            count = 0;
        },
        //通过公有方法调用私有方法
        sayhello: function(){
            return hello;
        }
    };
})();

console.log(testModule.incrementCounter());
console.log(testModule.incrementCounter());
console.log(testModule.incrementCounter());
console.log(testModule.incrementCounter());
testModule.resetCounter();
testModule.sayhello()();