/**
 * Created by Administrator on 2016/10/16.
 */
/*
* Subject(目标)
* 维护一系列的观察者，方便添加或删除观察者
* Observer(观察者)
* 为那些在目标状态发生改变时需获得通知的对象提供一个更新接口
* ConcreteSubject(具体目标)
* 状态发生改变时，向Observer发出通知，储存ConcreteObserver的状态
* ConcreteObserver(具体观察者)
* 存储一个指向ConcreteSubject的引用，实现Observer的更新接口，以使自身状态与目标的状态保持一致
* */
function ObserverList(){
    this.observerList = [];
}

ObserverList.prototype.Add = function(obj){
   return this.observerList.push(obj);
};

ObserverList.prototype.Empty = function(){
    this.observerList = [];
};

ObserverList.prototype.Get = function(index){
    if(index > -1 && index< this.obsererList.length){
        return this.observerList[index];
    }
};

ObserverList.prototype.Insert = function(obj,index){
    var pointer = -1;
    if(index ===0){
        this.observerList.unshift(obj);
        pointer = index;
    }else if(index === this.observerList.length){
        this.observerList.push(obj);
        pointer = index;
    }
    return pointer;
};

ObserverList.prototype.IndexOf = function(obj,startIndex){
    var i = startIndex,pointer = -1;
    while(i < this.observerList.length){
        if(this.observerList[i]===obj){
            pointer = i;
        }
        i++;
    }
    return pointer;
};

ObserverList.prototype.RemoveIndexAt = function(index){
    if(index === 0 ){
        this.observerList.shift();
    }else if(index === this.observerList.length-1){
        this.observerList.pop();
    }
};


