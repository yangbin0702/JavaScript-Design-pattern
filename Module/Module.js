/**
 * Created by Administrator on 2016/10/6.
 */
/*Moduleģʽ�����ñհ�ʵ��˽�к͹��еķ���
* �������ص���һ������
*
* �������ͨ���հ���ʵ��
* */
var testModule = (function(){
    //˽�б���
    var count = 0;
    //˽�з���
    var hello = function(){
        console.log("hello world");
    }
    return {
        //���з���
        incrementCounter: function(){
            return ++count;
        },
        //���з���
        resetCounter: function(){
            console.log('Counter value prior to reset:' + count);
            count = 0;
        },
        //ͨ�����з�������˽�з���
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