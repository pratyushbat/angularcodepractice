import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {HelloComponent} from '../hello/hello.component';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  myName: String = "Aman";
  name='Avenger'
  @ViewChild(HelloComponent, {static: false}) hello: HelloComponent;


  @ViewChild('uthapko', {static: false}) pRef: ElementRef;
 
  ngAfterViewInit() {
   console.log('Hello ', this.hello); 
  console.log(this.pRef.nativeElement.innerHTML); 
  // uthapko changed below
  this.pRef.nativeElement.innerHTML = "DOM updated succesfully!!!"; 
}
  
  updateName(input: String) {
      this.myName = input;
  }
  
  
  constructor() { }

  ngOnInit() {
    console.log('Hello ', this.hello); 
    // console.log(this.pRef.nativeElement.innerHTML); 
    // uthapko changed below
    // this.pRef.nativeElement.innerHTML = "DOM updated succesfully!!!"; 
  }



}
