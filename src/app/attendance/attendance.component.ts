import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  id: number = 0;
  userForm: FormGroup
  constructor(private activeRoute: ActivatedRoute, private userService:UserService, private router:Router) {
    this.userForm = new FormGroup({
      'id': new FormControl('', Validators.required),
      'date': new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {}

  onInput(value:any){
    this.id = value
    console.log(this.id)
    this.userService.getUserByID(this.id).subscribe((data) =>{});
  }

  submitAttendance(){
    let date: Date;
    Object.keys(this.userForm.controls).forEach((field) => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if (this.userForm.valid) {
      this.userService.getUserByID(this.userForm.value.id).subscribe((data) => {
          date = this.userForm.value.date;
          let arr = [];
          if (data.date) {
            arr = [...data.date, this.userForm.value.date];
          } 
          else {
            arr.push(this.userForm.value.date);
          }
          this.userForm.value.date = arr;
          this.userService.updateUserById(this.userForm.value.id, this.userForm.value).subscribe(() => {
                this.router.navigate([`record/${this.userForm.value.id}`]);
              },
              () => {
                alert('Something Went Wrong');
              }
            );
          this.userService.getAttendance().subscribe((data) => {
              if (data.length == 0) {
                this.userService.saveDate({attendance: date, numOfStudents: 1}).subscribe();
              } 
              else {
                let id:number | undefined;
                let flag = 0;
                for (let i = 0; i < data.length; i++) {
                  if (date == data[i].attendance) {
                    id=data[i].id
                    let num = data[i].numOfStudents + 1;
                    this.userService.updateAttendance(id,{attendance: date, numOfStudents: num}).subscribe(()=>{
                    },() => {
                      alert('Something Went Wrong');
                    });
                    flag = 1;
                    break;
                  }
                }
                if (flag == 0) {
                  this.userService.saveDate({attendance: date, numOfStudents: 1}).subscribe();
                }
              }
            },
            () => {
              alert('Something went wrong!');
            }
          );
        },
        () => {
          alert('No such student, please try again!');
        }
      );
    }
  }
}
