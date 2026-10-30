 const obj={
   
    name:"harshita",
    gender:"female",
    college:"bist",
    year: 2,
    cgpa: 7.6,
 };

 console.log(obj);
 console.log(Object.keys(obj));
 console.log(Object.entries(obj));

 const ar=[10,20,3,4,40,50];

 console.log(ar);

 console.log(...ar);
 
 const {Fullname,year,cgpa}=obj;

 console.log(obj.gender);

 console.log(year);

 const ar2=[24,56,47,21,...ar];
 console.log(ar2);

 function sum(...n)
 {
    return n.reduce((result=0,num)=>{result += num});

 }

 const answer=sum(2,3,4,5,6,7,8,9);

 console.log(answer);

 


 

 