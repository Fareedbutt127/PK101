import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Ng-ApexCharts
import { NgApexchartsModule } from "ng-apexcharts";

// Ng2-charts
import { ChartsModule } from 'ng2-charts';

import { ChartsGraphsComponent } from './charts-graphs.component';
import { ApexchartsComponent } from './apexcharts/apexcharts.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


const routes: Routes = [
  {
    path: '',
    component: ChartsGraphsComponent,
    children: [
      {
        path: '',
        redirectTo: 'apexcharts',
        pathMatch: 'full'
      },
      {
        path: 'apexcharts',
        component: ApexchartsComponent
      },
      {
        path: 'chartjs',
        component: ChartjsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ ChartsGraphsComponent, ApexchartsComponent, ChartjsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule, // Ng-ApexCharts
    ChartsModule, // Ng2-charts
    SweetAlert2Module.forRoot(),
    ZXingScannerModule
  ]
})
export class ChartsGraphsModule { }
