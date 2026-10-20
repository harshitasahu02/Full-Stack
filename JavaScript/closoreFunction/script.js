function greetings(name){
    return function () {

        console.log("Welcome to Ricr !!!",name);
    };

    

}

const greetMuskan=greetings("muskan");
const greetprince=greetings("Prince");


greetMuskan();
greetprince();