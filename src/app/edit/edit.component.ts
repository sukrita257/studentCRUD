import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number = 0;
  userForm: FormGroup;
  displayAnimation:boolean = false;
  constructor(private activeRoute: ActivatedRoute,private router:Router,private userService:UserService) {
    // this.id = this.activeRoute.snapshot.params.id;

    this.userForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', Validators.required),
    })

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      console.log(this.id)
      this.userService.getUserByID(paramsData.id).subscribe((data) => {
        console.log(data)
        console.log(this.id)
        delete data.id
        this.userForm.setValue(data)
      })
    })
  }

  submitdata() {
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.userForm.valid){
      this.userService.updateUserById(this.id,this.userForm.value).subscribe((data) => {
        this.router.navigate(["/user-list"])
      })
    }
  }

}
