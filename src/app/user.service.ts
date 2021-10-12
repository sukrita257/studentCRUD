import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, Attendance } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData:Array<User> = [];
  constructor(private http:HttpClient) { }

  saveUser(user:User){
    // this.userData.push(user)
    return this.http.post(`https://6162fa11c4833800173007c7.mockapi.io/student`,user)
  }

  getAllUser(){
    return this.http.get<Array<User>>(`https://6162fa11c4833800173007c7.mockapi.io/student`)
  }

  getUserByID(id:number){
    return this.http.get<User>(`https://6162fa11c4833800173007c7.mockapi.io/student/${id}`)
  }

  updateUserById(userId:number,userdata:User){
    return this.http.put(`https://6162fa11c4833800173007c7.mockapi.io/student/${userId}`,userdata)
  }

  deleteUserById(id?:number){
    return this.http.delete(`https://6162fa11c4833800173007c7.mockapi.io/student/${id}`)
  }



  saveDate(date: Attendance){
    // this.userData.push(user)
    return this.http.post(`https://6162fa11c4833800173007c7.mockapi.io/attendance`,date)
  }

  getAllDates(){
    return this.http.get<Array<Attendance>>(`https://6162fa11c4833800173007c7.mockapi.io/attendance`)
  }

  getAttendance(){
    return this.http.get<Array<Attendance>>(`https://6162fa11c4833800173007c7.mockapi.io/attendance`)
  }

  getAttendanceByDate(date: Date){
    return this.http.get<Attendance>(`https://6162fa11c4833800173007c7.mockapi.io/attendance/${date}`)
  }

  updateAttendance(id: number | undefined, attendance: Attendance){
    return this.http.put(`https://6162fa11c4833800173007c7.mockapi.io/attendance/${id}`,attendance)
  }
}
