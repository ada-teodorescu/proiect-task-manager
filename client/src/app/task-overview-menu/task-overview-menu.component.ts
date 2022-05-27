import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-task-overview-menu',
  templateUrl: './task-overview-menu.component.html',
  styleUrls: ['./task-overview-menu.component.css']
})
export class TaskOverviewMenuComponent implements OnInit {

  @Input() color1 = "#5E5BF5";
  

  divs: string[]= ["Owner","Skill","Lvl","+"];
  color: string[]=["#D7E4FF"];

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() {
   }

  ngOnInit(): void {
  }

}



