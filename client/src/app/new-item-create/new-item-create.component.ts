import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-item-create',
  templateUrl: './new-item-create.component.html',
  styleUrls: ['./new-item-create.component.css'],
  encapsulation: ViewEncapsulation.None
})

@Injectable()
export class NewItemCreateComponent {

  new_item_form = this.formBuilder.group({
    title: '',
    stats: '',
    priority: '',
    est: '',
    deadline: '',
    id_owner: 1
  });
  onSubmit(): void {
    // Process checkout data here
    if(this.new_item_form.value.title != '' && this.new_item_form.value.stats != ''){
      
        let localData = localStorage.getItem('user');
        if(localData){
          let user = JSON.parse(localData);
          this.new_item_form.value.id_owner = user.id;
        }

      this.http.post("http://localhost:3002/task/create", this.new_item_form.value).subscribe(result => {'Task created'});
      this.new_item_form.reset();
    }
  }

  closeResult: string = "";

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder, private http: HttpClient) {}

  openVerticallyCentered(content : any) {
  
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    window.location.reload();
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}