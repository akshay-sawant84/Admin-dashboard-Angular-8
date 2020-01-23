import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grayscale',
  templateUrl: './grayscale.component.html',
  styleUrls: ['./grayscale.component.scss']
})
export class GrayscaleComponent implements OnInit {
  grayscales=[
    {id:1, name:".bg-gray-100",tcolor:"#858796",bcolor:"#f8f9fc"},
    {id:2, name:".bg-gray-200",tcolor:"#858796",bcolor:"#eaecf4"},
    {id:3, name:".bg-gray-300",tcolor:"#858796",bcolor:"#dddfeb"},
    {id:4, name:".bg-gray-400",tcolor:"#858796",bcolor:"#d1d3e2"},
    {id:5, name:".bg-gray-500",tcolor:"#fff",bcolor:"#b7b9cc"},
    {id:6, name:".bg-gray-600",tcolor:"#fff",bcolor:"#858796"},
    {id:7, name:".bg-gray-700",tcolor:"#fff",bcolor:"#6e707e"},
    {id:8, name:".bg-gray-800",tcolor:"#fff",bcolor:"#5a5c69"},
    {id:9, name:".bg-gray-900",tcolor:"#fff",bcolor:"#3a3b45"},


    



  ]
  constructor() { }

  ngOnInit() {
  }

}
