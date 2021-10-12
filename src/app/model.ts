export interface User {
    id?:number,
    name: string,
    email: string,
    phone: string,
    date: Array<Date>
}

export interface Attendance{
  id?: number,
  attendance: Date,
  numOfStudents: number
}

export interface Chart{
  name: Date,
  value: number
}
