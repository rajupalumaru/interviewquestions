import React from 'react';



const CallAppyBind=()=>{return(<></> )}
export default  CallAppyBind;

// call function

var obj = {name:"raju"};

var greeting = function(a){
    return "Welcome "+this.name+" to "+a;
};

console.log(greeting.call(obj, "Japan"));


//apply function

var obj={name:'raju'};
var greeting=function(a){
    return 'welcome'+this.name+'to'+a;
};
var args=['japan']
console.log(greeting.apply(obj,args));

//bind function

var obj={name:"raju"}
function abc(a){
    return 'welcome'+this.name+"to"+a;
}
var bound=abc.bind(obj);        
console.log(bound('japan'));


//Call ,apply && bind functions.

function introduce(name, interest) {
    console.log('Hi! I\'m '+ name +' and I like '+ interest +'.');
    console.log('The value of this is '+ this +'.')
}

introduce('Suryansh', 'Coding'); // the way you usually call it
introduce.call(window, 'Batman', 'to save Gotham'); // pass the arguments one by one after the contextt
introduce.apply('Hi', ['Bruce Wayne', 'businesses']);

// bind funstion

(function introduce(name, interest) {
    console.log('Hi! I\'m '+ name +' and I like '+ interest +'.');
    console.log('The value of this is '+ this +'.')
 }).bind(window, 'Suryansh', 'Cosmology')();