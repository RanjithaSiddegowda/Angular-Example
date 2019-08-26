import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofemployee',
  templateUrl: './listofemployee.component.html',
  styleUrls: ['./listofemployee.component.css']
})
export class ListOfEmployeeComponent implements OnInit {
  items = [];
  constructor() { 
  }

  ngOnInit() {
    this.items = [
      {empid: 1, firstname: "Ranjitha", lastname: "SiddeGowda", department: "Digital", designation: "SSE", salary:"10K" },

      {empid: 2, firstname: "Hema", lastname: "Vashista", department: "Digital", designation: "SSE", salary:"10K" },

      {empid: 2, firstname: "Abhishek", lastname: "Kumar", department: "Digital", designation: "SSE", salary:"10K" },

  ];
  }
}
