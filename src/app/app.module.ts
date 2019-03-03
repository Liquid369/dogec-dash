import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { NetworkinfoComponent } from './networkinfo/networkinfo.component';
import { StatusComponent } from './status/status.component';
import { MempoolComponent } from './mempool/mempool.component';
import { NodedetailsComponent } from './nodedetails/nodedetails.component';
import { NodeinfoComponent } from './nodeinfo/nodeinfo.component';
import { BandwidthComponent } from './bandwidth/bandwidth.component';
import { DonateComponent } from './donate/donate.component';
import { FeeComponent } from './fee/fee.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
	FlexLayoutModule],
  exports:  [  MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule],
  declarations: [ AppComponent, NetworkinfoComponent, StatusComponent, MempoolComponent, NodedetailsComponent, NodeinfoComponent, BandwidthComponent, DonateComponent, FeeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }