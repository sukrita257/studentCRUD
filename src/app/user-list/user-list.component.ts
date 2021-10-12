import { Component, OnInit } from '@angular/core';
import { User } from '../model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:Array<User> = []
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.userService.getAllUser().subscribe((data) => {
      this.userList = data
     })
  }

  deleteData(id?:number){
    this.userService.deleteUserById(id).subscribe((data) => {
      this.loadData()
    })
  }

}
