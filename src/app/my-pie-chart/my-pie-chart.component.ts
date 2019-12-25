import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})
export class MyPieChartComponent implements OnInit {

  public pieChartLabels = ['sales Q1', 'sales Q2', 'sales Q3', 'sales Q4'];
  public pieChartData = [120, 150, 100, 30];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
