import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-overview-menu',
  templateUrl: './team-overview-menu.component.html',
  styleUrls: ['./team-overview-menu.component.css']
})
export class TeamOverviewMenuComponent implements OnInit {

  titles: string[]= ["Owner", "Priority","Status", "Deadline"];
  constructor() { }

  ngOnInit(): void {
  }

}
