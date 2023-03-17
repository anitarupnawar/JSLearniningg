function display (args) {
    return args*args;
    }
    var result = display (30);
    console.log(result);
    
    var show = function (args) {
    console.log(`Hi Good Morning`);
    
    }
    console.log( show);


// Scernorio 2

function display (args) {
    console.log(args*args);
    }
     display (30);
    
    var num= 100;
    console.log(num);  //100
    var show = function (args) {
    console.log(`Hi Good Morning`);
    
    }
    show();
    console.log(typeof show);


    //Function Expression for addition 2 numbers

    var sum = function (arg1, arg2) {
        console.log(arg1 + arg2);
        
    }
    sum (100, 100);

    //Function Expression for Multiflication
    
    var sum = function (arg1, arg2) {
        console.log(arg1 + arg2);
        return arg1*arg2;
    }
    var result = sum (100, 100);
    console.log(result);