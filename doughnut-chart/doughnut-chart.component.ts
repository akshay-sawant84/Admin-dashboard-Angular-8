import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = ["Direct", "Referral", "Social"];
  public doughnutChartData: MultiDataSet = [
    [55, 30, 15]
];

public doughnutChartColors:any[] = [
  { backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'] },
  { hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'] },
  { hoverBorderColor: "rgba(234, 236, 244, 1)"},
];
  public doughnutChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    
    legend: {
      display: false
  },
 tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 2,
      xPadding: 20,
      yPadding: 20,
      displayColors: false,
      caretPadding: 20,
    },
    cutoutPercentage: 70,
  };
  

  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}