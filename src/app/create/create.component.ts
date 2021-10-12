import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  userForm: FormGroup
  constructor(private userService:UserService, private router:Router) {
    this.userForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    })
  }

  ngOnInit(): void {
  }

  submitUser(){
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.userService.saveUser(this.userForm.value).subscribe(() => {
        this.router.navigate(['/user-list'])
      },() => {
        alert("Something Went Wrong")
      })
      
    }
  }

}
