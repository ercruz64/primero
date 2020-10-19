
for(var i = 1; i < 101; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("el numero "+ i + " es fizzbuzz");
    }
    else if(i % 3 == 0){
        console.log("el numero "+ i + " es fizz");
    }
    else if(i % 5 == 0){
        console.log("el numero "+ i + " es buzz");
    }
}


for(var i = 1; i < 101; i++){
    switch(true){
        case i % 3 == 0 && i % 5 == 0:
            console.log("el numero "+ i + " es fizzbuzz");
            break;

        case i % 3 == 0:
            console.log("el numero "+ i + " es fizz");
            break;
    
        case i % 5 == 0:
            console.log("el numero "+ i + " es buzz");
            break;
    }
}
 