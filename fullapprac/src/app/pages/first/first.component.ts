import { Component, OnInit } from '@angular/core';
import {Cars} from '../cars';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  cars: Cars[] = [
    {
      "name": "MG Hector",
      "color": 'blue'
    },
    {
      "name": "Suzuki",
      "color": 'purple'
    },
    {
      "name": "MG Hector",
      "color": 'blue'
    }
    
  ];
  condition = false;    

  constructor(){}

  ngOnInit() {
  }

}
