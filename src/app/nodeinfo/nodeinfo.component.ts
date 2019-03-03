import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nodeinfo',
  template: `
  <div 
  fxLayout="row wrap" 
  fxLayout.lt-sm="column" 
  fxLayoutGap="10px" 
  fxLayoutAlign="flex-end">
  <mat-card class="card">
<mat-card-header>
<mat-card-title>Node Info</mat-card-title>
</mat-card-header>
<mat-card-content>
<div>DogeC Node</div>
<div>Ver</div>
<div>Protocol</div>
<div>IP</div>
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
export class NodeinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
