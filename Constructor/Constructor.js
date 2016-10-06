/**
 * Created by Administrator on 2016/10/6.
 */
/*基本的构造器模式
* 通过new 关键字 创建实例，其中通过构造器实例化一个对象，这个和Java中的类很像
* 这里属性和方法都会根据实例化得到，对于多个实例公用的方法和属性时，可以使用prototype来定义。
* */
function Car(model,year,miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
    //重写toString方法
    this.toString = function(){
        return this.model + 'has done '+ this.miles + ' miles';
    }
}

var civic = new Car('Honda civic',1989,2000);
var mondeo = new Car("Ford Mondeo",1988,3000);

console.log(civic.toString());
console.log(mondeo.toString());