import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-system',
  templateUrl: './color-system.component.html',
  styleUrls: ['./color-system.component.scss']
})
export class ColorSystemComponent implements OnInit {
  colors = [
    {id:1, name:"Primary", value:'#4e73df',color:'#4e73df'},
    {id:2, name:"Success", value:'#1cc88a',color:'#1cc88a'},
    {id:3, name:"Info", value:'#36b9cc',color:'#36b9cc'},
    {id:4, name:"Warning", value:'#f6c23e',color:'#f6c23e'},
    {id:5, name:"Danger", value:'#e74a3b',color:'#e74a3b'},
    {id:6, name:"Secondary", value:'#858796',color:'#858796'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
