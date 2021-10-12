import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AttendanceComponent } from './attendance/attendance.component';
import { RecordComponent } from './record/record.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CreateComponent,
    EditComponent,
    UserListComponent,
    AttendanceComponent,
    RecordComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
