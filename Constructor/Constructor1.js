/**
 * Created by Administrator on 2016/10/6.
 */
/*带有原型的Constructor模式*/
function Car(model,year,miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
};
Car.prototype.toString= function(){
    return this.model + " has done"+ this.miles + ' miles';
};

var civic = new Car('Honda civic',1999,2999);
var monde = new Car("Ford monde",1998,2000);

console.log(civic.toString());

console.log(monde.toString());