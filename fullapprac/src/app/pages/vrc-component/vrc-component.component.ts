import { Component, OnInit ,ViewChild,ViewContainerRef} from '@angular/core';

@Component({
  selector: 'vcr',
  templateUrl: './vrc-component.component.html',
  styleUrls: ['./vrc-component.component.css']
})
export class VrcComponentComponent implements OnInit {

  @ViewChild('tpl',{static:false}) tpl2;
  @ViewChild('inne',{static:false}) pRef;



  // ViewContainerRef with dependency injection
  constructor(private _vcr: ViewContainerRef) {
  }
  
  ngAfterViewInit() {
    
     this._vcr.createEmbeddedView(this.tpl2);
     console.log(this.pRef.nativeElement.innerHTML); 
     this.pRef.nativeElement.innerHTML="Changed herre";
     console.log(this.pRef.nativeElement.innerHTML); 
     console.log(this._vcr.element)
   
    
  }

  ngOnInit() {
  }

}
