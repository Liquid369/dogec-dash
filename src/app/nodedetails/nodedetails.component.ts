import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nodedetails',
  template: `
  <div 
  fxLayout="row wrap" 
  fxLayout.lt-sm="column" 
  fxLayoutGap="10px" 
  fxLayoutAlign="flex-end">
  <mat-card class="card">
  <mat-card-header>
<mat-card-title>Node Details</mat-card-title>
</mat-card-header>
<mat-card-content>
<div>Network</div>
<div>Connection</div>
<div>Blocks</div>
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
export class NodedetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
