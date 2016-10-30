/**
 * Created by Administrator on 2016/10/30.
 */
var SingletonTester = (function(){
    //options:����singleton����������Ϣ�Ķ���
    //e.g var options = {name:'test',pointX:5};
    function Singleton(options){
        //���δ�ṩoptions��z������Ϊ�ն���
        options = options ||{};
        this.name = "SingletonTester";
        this.pointX = options.pointX ||6;
        this.pointY = options.pointY || 10;
    }
    //ʵ��������
    var instance;
    //��̬�����ͷ�����ģ��
    var _static = {
        name:'SingletonTest',
        getInstance:function(options) {
            if (instance === undefined) {
                instance = new Singleton(options);
            }
            return instance;
        }
    };
    return _static;
})();

var singletonTest = SingletonTester.getInstance({
    pointX:5
});

console.log(singletonTest.pointX);
console.log(singletonTest.name);
console.log(SingletonTester.name);