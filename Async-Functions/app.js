let logGreeting1 = function(){
    console.log("Hallo 1");
};
let logGreeting2 = function(){
    console.log("Hallo 2");
};
let logGreeting3 = function(){
    console.log("Hallo 3");
};

logGreeting1();

setTimeout(logGreeting2, 1000);

logGreeting3();

