import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['../task/task.component.css']
})
export class TaskTableComponent implements OnInit {

  @Input() nr = "1"
  @Input() color1 = "#5E5BF5"

  divs: string[]= ["Owner", "Status", "Deadline", "Priority","Time est", "+"];
  constructor() { }

  ngOnInit(): void {
  }

}
