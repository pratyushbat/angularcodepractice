// with decorator we can customize our classes at design Time
import { config } from "rxjs";

function Student(config){


    return function(target){
        Object.defineProperty(target.prototype, 'course', {value: () => config.course})

        // Object.defineProperty(target.prototype, 'course', {value: () => "Angular 2"})
        Object.defineProperty(target.prototype, 'follower',{value: 'pratyush'})
        
    }


}

@Student({'course': 'hello'})
class Person{

    firstName;
    lastName;
    constructor(firstName :  String,lastName : String){
        this.firstName=firstName;
        this.lastName=lastName;
    
    }
    
    }
    
    let asim =new Person('Shivam','Kumar');
    console.log(asim.follower);
    console.log(asim.course());