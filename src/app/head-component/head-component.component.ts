import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-head-component',
  templateUrl: './head-component.component.html',
  styleUrls: ['./head-component.component.css']
})
export class HeadComponentComponent implements OnInit {

  @Input() title = "Team Tasks";
  Xs : X[] = [new X('Team Tasks', '/TeamTask'), new X('Task Overview', '/TaskOverview'), new X('Team Overview', '/TeamOverview')];
  constructor() { }

  ngOnInit(): void {
  }

}

class X{
  title = "";
  link = "";
  constructor(t:string, l:string) {
    this.title = t;
    this.link = l;
  }

}
