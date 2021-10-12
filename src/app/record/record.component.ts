import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  id: number=0
  name:string=""
  data:object={}
  dates:Array<Date>=[]
  attendance:any=[]

  constructor(private activeRoute: ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      console.log(this.id)
      this.userService
      this.userService.getUserByID(paramsData.id).subscribe((data) => {
        console.log(data)
        console.log(this.id)
        this.name=data.name
        if(data.date){
          this.dates=data.date
          console.log(data.date)
        }
      })
    })
  }
}
