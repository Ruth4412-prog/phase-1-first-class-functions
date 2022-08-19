const {returns} = require("chai-spies");

function receivesAFunction(callback){
    console.log(callback());
}
receivesAFunction(function(){return "spy"});

function returnsANamedFunction(){
    const innerFunction = function (name){
};
return innerFunction;
}
returnsANamedFunction;


function returnsAnAnonymousFunction(){
    return function(){
        
    }
}