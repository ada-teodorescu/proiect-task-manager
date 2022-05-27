import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-head-component',
  templateUrl: './head-component.component.html',
  styleUrls: ['./head-component.component.css']
})




export class HeadComponentComponent implements OnInit {

  @Input() title = "Team Tasks";
  Xs : X[] = [new X('Team Tasks', '/TeamTask'), new X('Task Overview', '/TaskOverview'), new X('Team Overview', '/TeamOverview')];

  constructor(private router: Router) { }

  user:any

  ngOnInit(): void {
    let localData = localStorage.getItem('user');
    if(localData){
      this.user = JSON.parse(localData);
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/SignIn']);
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
