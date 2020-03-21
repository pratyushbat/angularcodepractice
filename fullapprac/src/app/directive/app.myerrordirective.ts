import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector:'[my-error]'
})

export class MyErrorDirective{
// custom attribut directive and it is used in first class

    constructor(elr:ElementRef){
        elr.nativeElement.style.background='blue';
    }
    // To access any element of our DOM, we need to use ElementRef
}