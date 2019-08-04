function printTimeout(str,n) {
    setTimeout(function () { 
    console.log (str); 
    } ,n*1000)
} 
function sumAll(n) {
    var sum = 0;
  if (n==0) {
      return sum;
  } else {
      return sum = n +sumAll(n-1);
  }
}
function bombTimer(str, time) { 
    if (time == 1) {
        return console.log(str);
    } else {
        time+=1;
       var intTime = setInterval(function(){
               console.log(time=time-1)
        } ,1000);
    setTimeout(function() {
        clearInterval(intTime);
               }, (time-1)*1000); 
    setTimeout(function() {
       console.log(str);
            }, time*1000);            
    }
 }
function factorial(n) {
    var fakt = 1;
    if (n == 1) {
        return fakt;
    } else {
        return fakt = n*factorial(n-1);
    }
}
function salary (){
    return 700
}
function valuta(val) {
    return a = salary () +` ${val}`;
}
const myModule = (function() {
  
    const privateVariable = 'Hello World';
    
    function privateMethod() {
      console.log(privateVariable);
    }
    return {
      publicMethod: function() {
        privateMethod();
      }
    }
  })();
  //myModule.publicMethod();
  //     filterNumbers([1, 4, 8, 1, 20], 5) // [1, 4, 1]
function filterNumbers(arr, maxNumber) {
    var newArr = [];
    for (var i=0; i<=arr.length; i++) {
        if (arr[i]<maxNumber) {
            newArr.push(arr[i]);
        };
    };
    return newArr;
}
// minMax([1, 4, 8, 2, 20]) // { max: 20, min: 1 }     
function minMax(arr) {
    var rezMax = arr.reduce(function(max,current){
         if (max>current) {
            return max
        } else 
        return current;
    });
    var rezMin = arr.reduce(function(min,current){
        if (min<current) {
           return min
       } else 
       return current;
   });
    console.log(`max: ${rezMax}, min: ${rezMin}`)
}
// average([1,4,2]) // 2.33
function average(arr) { 
    var sumArr = arr.reduce(function(sum,current){
        return sum+current;
    });
    var averArr = sumArr/arr.length;
    return averArr;
}
// concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]) // [0, 1, 2, 3, 4, 5]
function concatFirstNestedArrays(arr) { 
    var newArr = [];
    newArr = arr.reduce(function(first,current) {
        return first.concat(current)
    })
    return newArr;
 }
// {
  //  1: { id: 1, name: 'John', birthday: '1999-2-12' },
  //  2: { id: 2, name: 'Bill', birthday: '1999-1-19' },
  //  3: { id: 3, name: 'Carol', birthday: '1999-3-11' },
  //  4: { id: 4, name: 'Luce', birthday: '1999-2-22' }
  // };
 const users = [
    { id: 1, name: 'John', birthday: '1999-2-12' },
    { id: 2, name: 'Bill', birthday: '1999-1-19' },
    { id: 3, name: 'Carol', birthday: '1999-3-11' },
    { id: 4, name: 'Luce', birthday: '1999-2-22' }
  ];
  function usersToObject(users) {
    let object={};
      for (let i=0; i<users.length; i++) {
          object[i+1] = users[i];
      };
      console.log(object)
  }
  const usersN = [
    { name: 'John', birthday: '1999-2-12' },
    { name: 'Bill', birthday: '1999-1-19' },
    { name: 'Carol', birthday: '1999-4-11' },
    { name: 'Luce', birthday: '1999-2-22' }
  ];
  // [{ name: 'Bill', birthday: '1999-1-19' }]
  function filterUsersByMonth(users, month) {
     var arrNew = [];
      arrNew = users.filter(function(item){
   return (item.birthday.split('-')[1] == month+1)
    });
    console.log(arrNew);
  }
  // 'John 19, Luce 18'
  const usersAge = [
    { name: 'John', birthday: '1999-6-12' },
    { name: 'Bill', birthday: '2005-5-19' },
    { name: 'Carol', birthday: '2003-10-11' },
    { name: 'Luce', birthday: '2000-11-22' },
    {name: 'Igor', birthday: '2000-9-2'}
  ];
  
  function getAdultNames(users) {
   var today = new Date;
   tY =  today.getFullYear();
   tM = today.getMonth();
   tD = today.getDate();
  for (var i=0; i <users.length; i++){
   var age = 0;
   var y = users[i].birthday.split('-')[0];
   var m = users[i].birthday.split('-')[1];
   var d = users[i].birthday.split('-')[2];
   if(m>tM) {
       age = tY-y-1;
   } if (m ==tM) { 
      d>tD ? tY-y-1 : tY-y;
   } else {
       age = tY-y};
       users[i].age = age;
  };
  var newUsers = users.filter(function(item){
      return item.age >18;
  });
  var str = '';
  newUsers.forEach(function(item){
    str = str + item.name+' '+item.age+', ';
  });
  return str;
  //console.log(str);
  //console.log(users);
  //console.log(newUsers);
}

  getAdultNames(usersAge) 