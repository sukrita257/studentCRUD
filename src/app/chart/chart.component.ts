import { Component, OnInit } from '@angular/core';
import { Attendance, Chart } from '../model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  view: [number, number] = [700, 400];
  chartData: Array<Chart> = [];
  resultData: Array<Attendance> = [];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Students';

  constructor(private userService:UserService) {  }

  ngOnInit(): void {
    this.userService.getAttendance().subscribe((data)=>{
      let arr = []
      for(let i =0;i<data.length;i++){
        arr.push({
          name: data[i].attendance,
          value: data[i].numOfStudents
        })
      }
      this.chartData = arr
      console.log(this.chartData)
      Object.assign(this.resultData, this.chartData)

    })
    console.log(this.chartData)

  }

}
