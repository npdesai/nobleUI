import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Ng-ApexCharts
import { NgApexchartsModule } from "ng-apexcharts";

// Ng2-charts
import { NgChartsModule } from 'ng2-charts';

import { ChartsGraphsComponent } from './charts-graphs.component';
import { ApexchartsComponent } from './apexcharts/apexcharts.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartModule, CategoryService, LineSeriesService, StepLineSeriesService, SplineSeriesService, StackingLineSeriesService, DateTimeService,
  SplineAreaSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, ColumnSeriesService, AccumulationChartAllModule, ChartAllModule, DataLabelService, LegendService, TooltipService, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';

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
    NgChartsModule, // Ng2-charts
    ChartModule,
    AccumulationChartAllModule,
    ChartAllModule,       
    RangeNavigatorAllModule,
    
  ],
  providers: [ CategoryService, LineSeriesService, StepLineSeriesService, SplineSeriesService, StackingLineSeriesService, DateTimeService,
    SplineAreaSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, ColumnSeriesService,TooltipService,LineSeriesService
    ,CategoryService,DataLabelService,LegendService, ]
})
export class ChartsGraphsModule { }
