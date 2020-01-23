import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  customs=[
    {id:1,name:".text-gray-100",bcolor:"#5A5C69",tcolor:"#F8F9FC"},
    {id:2,name:".text-gray-200",bcolor:"#5A5C69",tcolor:"#F8F9FC"},
    {id:3,name:".text-gray-300",bcolor:"#5A5C69",tcolor:"#F8F9FC"},
    {id:4,name:".text-gray-400",bcolor:"#5A5C69",tcolor:"#F8F9FC"},
    {id:5,name:".text-gray-500",bcolor:"#fff",tcolor:"#B7B9CC"},
    {id:6,name:".text-gray-600",bcolor:"#fff",tcolor:"#858796"},
    {id:7,name:".text-gray-700",bcolor:"#fff",tcolor:"#6e707e"},
    {id:8,name:".text-gray-800",bcolor:"#fff",tcolor:"#5a5c69"},
    {id:9,name:".text-gray-900",bcolor:"#fff",tcolor:"#3a3b45"}
    

  ]
  constructor() { }

  ngOnInit() {
  }

}
