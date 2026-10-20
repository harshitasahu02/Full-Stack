const ary =["apple",2.5,99,"himachal","a"];

let arr=["apple",2.5,99,"himachal","a"];

// ary=20;
// arr=20;

console.log("with for Each")
ary.forEach((element)=>{
      if(typeof element ==="number"){
         console.log(element);
  }
});



console.log("with map");

 var x=ary.map((element)=>{

     if(typeof element ==="number"){
        return element;
         
  }
    
});

console.log("X =",x);

//filter

const ar2=["apple",2.5,99,"himachal","a"];

var F=ar2.filter((item) => item !== 99);
console.log("F =",F);


var Fi=ar2.find((item) => item === 99);
console.log("Fi =",Fi);

var Fix=ar2.findIndex((item) => item === 99);
console.log("Fix =",Fix);


const ar3=[2,5,1,7,3,9,4,8];

var s=ar3.sort((a,b)=>a-b);
console.log("S=",s);

var s=ar3.sort((a,b)=>b-a);
console.log("S=",s);















 

 