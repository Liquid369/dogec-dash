import { Component, OnInit } from '@angular/core';
import { MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@Component({
  selector: 'app-networkinfo',
  template: `
  <div 
  fxLayout="row wrap" 
  fxLayout.lt-sm="column" 
  fxLayoutGap="10px" 
  fxLayoutAlign="flex-end">
  <mat-card class="card">
<mat-card-header>
<div></div>
<mat-card-title>Network Info</mat-card-title>
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
    border-radius: 8px;
	font-family: Roboto, monospace;
  `]
})
export class NetworkinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
