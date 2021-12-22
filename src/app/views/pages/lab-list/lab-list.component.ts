import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.scss'],
  preserveWhitespaces: true
 
})
export class LabListComponent implements OnInit {
  router: any;
  showFilters = false;  
  basicModalCloseResult: string = '';

  constructor(private modalService: NgbModal) { }

  openBasicModal(content) {
    this.modalService.open(content, {}).result.then((result) => {
    }).catch((res) => {});
  }
  
  ngOnInit(): void {
   
  }


}