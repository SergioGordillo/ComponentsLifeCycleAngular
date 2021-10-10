import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnChanges, DoCheck {

  constructor() {
    console.log("constructor");
   }


  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }

}
