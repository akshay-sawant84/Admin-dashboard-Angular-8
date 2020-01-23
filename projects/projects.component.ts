import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  title="Projects";
  projects =[
    {id:1,pname:"Server Migration", value:20,color:"#e74a3b",width:"20%"},
    {id:2,pname:"Sales Tracking", value:40,color:"#f6c23e",width:"40%"},
    {id:3,pname:"Customer Database", value:60,color:"#4e73df",width:"60%"},
    {id:4,pname:"Payout Details", value:80,color:"#36b9cc",width:"80%"},
    {id:5,pname:"Account Setup", value:100,color:"#1cc88a",width:"100%"}

    
  ]
  constructor() { }

  ngOnInit() {
  }

}
