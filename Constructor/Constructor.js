/**
 * Created by Administrator on 2016/10/6.
 */
/*�����Ĺ�����ģʽ
* ͨ��new �ؼ��� ����ʵ��������ͨ��������ʵ����һ�����������Java�е������
* �������Ժͷ����������ʵ�����õ������ڶ��ʵ�����õķ���������ʱ������ʹ��prototype�����塣
* */
function Car(model,year,miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
    //��дtoString����
    this.toString = function(){
        return this.model + 'has done '+ this.miles + ' miles';
    }
}

var civic = new Car('Honda civic',1989,2000);
var mondeo = new Car("Ford Mondeo",1988,3000);

console.log(civic.toString());
console.log(mondeo.toString());