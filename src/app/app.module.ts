import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskTableComponent } from './task-table/task-table.component';
import { HeadComponentComponent } from './head-component/head-component.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TeamTaskMenuComponent } from './team-task-menu/team-task-menu.component';
import { TaskOverviewMenuComponent } from './task-overview-menu/task-overview-menu.component';
import { TeamOverviewMenuComponent } from './team-overview-menu/team-overview-menu.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TeamOverviewTaskComponent } from './team-overview-task/team-overview-task.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskTableComponent,
    HeadComponentComponent,
    SignInComponent,
    SignUpComponent,
    TeamTaskMenuComponent,
    TaskOverviewMenuComponent,
    TeamOverviewMenuComponent,
    BarChartComponent,
    PieChartComponent,
    TeamOverviewTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MDBBootstrapModule.forRoot(),
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
