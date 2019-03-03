import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
  <div 
  fxLayout="row wrap" 
  fxLayout.lt-sm="column" 
  fxLayoutGap="10px" 
  fxLayoutAlign="flex-end">
  <mat-card class="card">
<mat-card-header>
<div></div>
<mat-card-title>Status</mat-card-title>
</mat-card-header>
<mat-card-content>
<div>Block Height</div>
<div>Hash Rate</div>
<div>Difficulty</div>
</mat-card-content>
</mat-card>
</div>`,
    styles: [`
    display: block;
    padding: 32px;
    border: 1px solid black;
    border-radius: 10px;
  `]
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
