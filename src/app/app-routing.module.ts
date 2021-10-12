import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { ChartComponent } from './chart/chart.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { RecordComponent } from './record/record.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path : "user-list",
    component : UserListComponent
  },
  {
    path : "user-create",
    component : CreateComponent
  },
  {
    path : "user-edit/:id",
    component : EditComponent
  },
  {
    path : "attendance",
    component : AttendanceComponent
  },
  {
    path : "record/:id",
    component : RecordComponent
  },
  {
    path : "chart",
    component : ChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
