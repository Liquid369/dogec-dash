import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandwidth',
  template: `
<mat-card class="card">
<mat-card-header>
<mat-card-title>Bandwidth</mat-card-title>
</mat-card-header>
<mat-card-content>
<div>Receive</div>
<div>Send</div>
</mat-card-content>
</mat-card>`,

  styles: [`
	display: flex;
    padding: 10px;
    border: 1px solid black;
    border-radius: 8px;
  `]
})
export class BandwidthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
