/**
 * Created by Administrator on 2016/10/6.
 */
/*��ģʽ����û�ж�instance�Ƿ���ڽ����жϣ����в�û��ֻ��ʵ����һ�Σ�
��Ͳ����ϵ���ģʽ��Ҫ��
* */
var myBadSingleton = (function(){
    var instance;
    function init(){
        //˽�з����ͱ���
        var  privateMethod = function(){
            console.log("hello I am the private method");
        }
        var privateVariable = "I am the private variable";
        var privateNumber = Math.random();
        //���з����ͱ���
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