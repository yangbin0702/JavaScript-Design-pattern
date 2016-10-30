/**
 * Created by Administrator on 2016/10/16.
 */
/*
* Subject(Ŀ��)
* ά��һϵ�еĹ۲��ߣ�������ӻ�ɾ���۲���
* Observer(�۲���)
* Ϊ��Щ��Ŀ��״̬�����ı�ʱ����֪ͨ�Ķ����ṩһ�����½ӿ�
* ConcreteSubject(����Ŀ��)
* ״̬�����ı�ʱ����Observer����֪ͨ������ConcreteObserver��״̬
* ConcreteObserver(����۲���)
* �洢һ��ָ��ConcreteSubject�����ã�ʵ��Observer�ĸ��½ӿڣ���ʹ����״̬��Ŀ���״̬����һ��
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


