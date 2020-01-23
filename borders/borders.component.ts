import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borders',
  templateUrl: './borders.component.html',
  styleUrls: ['./borders.component.scss']
})
export class BordersComponent implements OnInit {
  bleft=[
    {id:1,name:".border-left-primary",wcolor:"#4e73df",tcolor:"#858796"},
    {id:2,name:".border-left-success",wcolor:" #1cc88a",tcolor:"#858796"},
    {id:3,name:".border-left-info",wcolor:" #36b9cc",tcolor:"#858796"},
    {id:4,name:".border-left-warning",wcolor:"#f6c23e",tcolor:"#858796"},
    {id:5,name:".border-left-danger",wcolor:"#e74a3b",tcolor:"#858796"},
  ]

  bbottom=[
    {id:1,name:".border-bottom-primary",wcolor:"#4e73df",tcolor:"#858796"},
    {id:2,name:".border-bottom-success",wcolor:"#1cc88a",tcolor:"#858796"},
    {id:3,name:".border-bottom-info",wcolor:" #36b9cc",tcolor:"#858796"},
    {id:4,name:".border-bottom-warning",wcolor:"#f6c23e",tcolor:"#858796"},
    {id:5,name:".border-bottom-danger",wcolor:"#e74a3b",tcolor:"#858796"},
  ]
  constructor() { }

  ngOnInit() {
  }

  
}
