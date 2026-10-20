const ar1 = [1,2,3,4,5];
let ar2 = [1,2,3,4,5];

console.log(ar1);
console.log(ar2);

ar1[0] =20;
ar2 =10;

console.log(ar1);
console.log(ar2);

const ch1=["abcd","defg","hijk"];

console.log(ch1);

const arr=["apple","2kg","himichal",20,99.1,true];


for( var i=0;i<arr.length;i++){

    console.log(arr[i]);

}

console.log(arr[2]);//himichal
console.log(arr.at(-4));

arr.push("delhi");
console.log(arr);

arr.pop();
console.log(arr);

let abc=arr.filter((item)=>item!="himichal");
console.log(abc);

const arr2=["apple","2kg","himichal",20,99.1,true];

arr2.shift();
console.log(arr2);

arr2.unshift("mango");

console.log(arr2);

const arr3=["Orange","2kg","nagpur",20,99.1,true];


// for( var i=0;i<arr.length;i++){

//     console.log(arr[i]);

// }
arr3.forEach((element)=> {
    console.log(element);
})












