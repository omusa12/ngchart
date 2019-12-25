import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {

  public doughnutChartLabels = ['sales Q1', 'sales Q2', 'sales Q3', 'sales Q4'];
  public doughnutChartData = [120, 150, 100, 30];
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
