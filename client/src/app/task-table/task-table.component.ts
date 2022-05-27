import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['../task/task.component.css']
})
export class TaskTableComponent implements OnInit {

  @Input() nr = "1"
  @Input() color1 = "#5E5BF5"

  tasks : TaskDetail[] = [];

  divs: string[]= ["Owner", "Status", "Deadline", "Priority","Time est", "+"];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllTasks();
    console.log(this.tasks);
  }

  getAllTasks(){
    this.http.get(`http://localhost:3002/task/get`).subscribe(result => {
      const result_tasks : any = result;
        for(let task of result_tasks){
          this.tasks.push(new TaskDetail(task));
        }
      
      });
    }
}

class TaskDetail{
  title = "";
  stats = "";

  private defaultColor = "";

  private doneColor = "#61F95E";
  private inprogressColor ="#F9B25E";
  private waitingColor = "#82ACFF";

  private hightColor = "#EE7E7E";
  private lowColor = "#7EEE90";
  private mediumColor = "#EED57E";

  constructor( task : any){
    this.title = task.title;
    this.stats = this.parse_stats(task);
  }

  parse_stats(task : any){
    let data = "(" + task.email + ");";
    data += "(" + task.stats + "," + this.statusColor(task.stats) + ");";
    data += "(" + task.deadline + "," + this.defaultColor + "," + "error_outline" + ");";
    data += "(" + task.priority + "," + this.priorityColor(task.priority) + ");";
    data += "(" + task.est + "," + this.defaultColor + ")";

    return data;
  }

  statusColor(status : string){
    switch(status){
      case "In progress" : 
        return this.inprogressColor;
      case "Done" :
        return this.doneColor;
      case "Waiting for review" :
        return this.waitingColor;
      default: 
        return this.defaultColor;
    }
  }

  priorityColor(status : string){
    switch(status){
      case "Hight" : 
        return this.hightColor;
      case "Low" :
        return this.lowColor;
      case "Medium" :
        return this.mediumColor;
      default: 
        return this.defaultColor;
    }
  }
}