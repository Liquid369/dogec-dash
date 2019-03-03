import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee',
  template: `
  <div 
  fxLayout="row wrap" 
  fxLayout.lt-sm="column" 
  fxLayoutGap="10px" 
  fxLayoutAlign="flex-end">
  <mat-card class="card">
<mat-card-header>
<div></div>
<mat-card-title>Fee</mat-card-title>
</mat-card-header>
<mat-card-content>
</mat-card-content>
</mat-card>
</div>`,
  styles: [`
    display: block;
    padding: 32px;
    border: 1px solid black;
    border-radius: 8px;
  `]
})
export class FeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
