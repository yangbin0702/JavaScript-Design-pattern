/**
 * Created by Administrator on 2016/10/6.
 */
/*该模式由于没有对instance是否存在进行判断，所有并没有只是实例化一次，
这就不符合单例模式的要求
* */
var myBadSingleton = (function(){
    var instance;
    function init(){
        //私有方法和变量
        var  privateMethod = function(){
            console.log("hello I am the private method");
        }
        var privateVariable = "I am the private variable";
        var privateNumber = Math.random();
        //公有方法和变量
        return {
            publicMethod: function(){
                return privateNumber;
            },
            publicVariable: "I am the public Variable",
            publicMethod2: function(){
                console.log("I am also the public Method");
            }
        }
    }
    return{
        getInstance: function(){
            instance = init();
            return instance;
        }
    };
})();

singleA = myBadSingleton.getInstance();
singleB = myBadSingleton.getInstance();

console.log(singleA.publicMethod());
console.log(singleA.publicVariable);
singleA.publicMethod2();

console.log(singleB.publicMethod());
console.log(singleB.publicVariable);
singleA.publicMethod2();