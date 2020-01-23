import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
   circle_button=[
     {id:1,name:".btn-circle", size:'1rem'},
     {id:2,name:".btn-circle", size:'.5rem'},
     {id:3,name:".btn-circle", size:'1.5rem'},
    ]
  constructor() { }

  ngOnInit() {
  }

}
