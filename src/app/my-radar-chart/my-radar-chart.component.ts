import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.css']
})
export class MyRadarChartComponent implements OnInit {

  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartType = 'radar';
  public radarChartData = [
    {data: [65, 59, 80, 81], label: '2017'},
    {data: [28, 51, 38, 43], label: '2018'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
