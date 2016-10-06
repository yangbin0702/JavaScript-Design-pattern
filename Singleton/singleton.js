/**
 * Created by Administrator on 2016/10/6.
 */
/*单例模式
* 只能被实例化一次
* 通过公有方法和变量可以使外部进行访问，由于只能实例化一次，可以在publicMethod中得到验证
* 因为得到的将是同一个实例，所以对应的变量也是同一个,结果证明成立
*
* 但是如果在publicMethod中直接返回Math.random()，得到的结果就不一样
* */
var mySingleton = (function(){
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
            if(!instance){
                instance = init();
            }
            return instance;
        }
    };
})();

singleA = mySingleton.getInstance();
singleB = mySingleton.getInstance();
console.log(singleA.publicMethod());
console.log(singleA.publicVariable);
singleA.publicMethod2();

console.log(singleB.publicMethod());
console.log(singleB.publicVariable);
singleA.publicMethod2();