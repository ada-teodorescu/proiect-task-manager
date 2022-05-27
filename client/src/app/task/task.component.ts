import { Optional } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() title = "Task Name"
  @Input() bgColor = "#F5F6F8"
  @Input() baraColor = "#DF5BF5"
  @Input() icon = "message"
  @Input() addMode = true

  statusuri : any[] = []

  dataSource = new TableVirtualScrollDataSource();


  @Input()
  public set stats(val : string){
    //(title, bgColor, icon); (title, bgColor, icon);
    let obiecte = val.split(";");
    
    for(let camp of obiecte){

      if(camp[0]=='['){
        console.log(camp);
        camp = camp.replace("[", "");
        camp = camp.replace("]", "");
        let obiectStatus = camp.split(".");
        console.log(obiectStatus);
        this.statusuri.push(new GroupStatus(
          this.createCampStatus(obiectStatus[0]),
          this.createCampStatus(obiectStatus[1])
        ));
      }
      else {
        this.statusuri.push(this.createCampStatus(camp));
      }

    }
  }

  createCampStatus(s : string){
    let camp = s.replace("(", "");
    camp = camp.replace(")", "");
    let ob = camp.split(",");
    // this.statusuri.push(new CampStatus(ob[0], ob[1], ob[2])); 
    return (new CampStatus(ob[0], ob[1], ob[2])); 
  }
 
  constructor() {

   }

  ngOnInit(): void {

  }

}

class CampStatus{
  icon = ""
  title = ""
  bgColor = ""
  
   constructor(t?:string, b?:string, i?:string) {
    if(typeof t !== 'undefined'){
      this.title = t;
    }
    
    if(typeof i !== 'undefined'){
      this.icon = i;
    }
    
    if(typeof b !== 'undefined'){
      this.bgColor = b;
    }

  }
 
  isGroup(){
    return false;
  }
 }

 class GroupStatus{
   status1 : CampStatus;
   status2 : CampStatus;
   bgColor : string;

   constructor(s1 : CampStatus, s2 : CampStatus){
     this.status1 = s1;
     this.status2 = s2;
     this.bgColor = s1.bgColor;
   }

   isGroup(){
    return true;
  }



 }



