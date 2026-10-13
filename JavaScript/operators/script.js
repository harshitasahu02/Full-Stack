let a=10;
let b=20;
let c="10";
let d="20";

console.log(a==b);//flase
console.log(a==c);//true
console.log(a===c);//flase
console.log(a!=b);//true
console.log(a!==c);//true

let x=5;
let y=2;

console.log(x%y);//1

let p= 10;
let q=3;
console.log(p/q);//3.33

//logical Operator
//AND &&
//OR ||
// Not !

let m=true ;
let n= false;
let o=true;

console.log(m && n);
console.log(m && o);
console.log(n && o);
console.log(m || n);
console.log(n || o);

console.log(!m && n);
console.log(!m && o);
console.log(!n && o);
console.log(!m || n);
console.log(!m || o);


console.log(a++);//20
console.log(a--);//19
console.log(a);//18



console.log(b--);//20
console.log(b);//19
console.log(--b);//18

console.log(a>b ?"hello":"Bye");

//Conditions 
if(a>b){
    console.log("hello");
} else {
     console.log("bye");
}

//loop
for(var i=0;i<5;i++){
    console.log("We Are Learning JavaScript",i+1);
}
var i=0;
while(i<5 ){
    console.log("we are learning js",i+1);
i++;
}

var i=0;
do{
    console.log("we are learning js do-while loop",i+1);
    i++;
}while(i<=5);

//switch Statements

console.log("1.check Balance");
console.log("2.withdraw Money");
console.log("3.");
console.log("4.pinned");



let choice=4;
switch(choice){
     case 1:{
        console.log("Checking Your balance");
        break;
        }
      case 2:{
        console.log("please collect your cash");
        break;
        }
       
       case 3:{
        console.log("please find your transaction below");
        break;
        }
        case 4:{
            console.log("Enter your new pin");
            break;
        }
        case 5:{
            console.log("Put Your cash Into Machine");
            break;
        }
        case 6:{
            console.log("Thank You For");
            break;
        }
        default:{
          console.log("Worng Choice");
          break;
        }

}


// if(choice===1){
//     console.log("Cheaking Your Balance");
// }else if(choice===2){
//     console.log("please collect your cash");
// }else if(choice===3){
//     console.log("please collect your cash");
// }else if














 


    
