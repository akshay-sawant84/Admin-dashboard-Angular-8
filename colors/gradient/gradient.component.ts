import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.scss']
})
export class GradientComponent implements OnInit {
  gradients=[
    {id:1,name:'.bg-gradient-primary',bcolor:"#4e73df",bimage:"linear-gradient(180deg,#4e73df 10%,#224abe 100%)"},
    {id:2,name:'.bg-gradient-success',bcolor:"#1cc88a",bimage:" linear-gradient(180deg,#1cc88a 10%,#13855c 100%)"},
    {id:3,name:'.bg-gradient-info',bcolor:"#36b9cc",bimage:"linear-gradient(180deg,#36b9cc 10%,#258391 100%)"},
    {id:4,name:'.bg-gradient-warning',bcolor:"#f6c23e",bimage:"linear-gradient(180deg,#f6c23e 10%,#dda20a 100%)"},
    {id:5,name:'.bg-gradient-danger',bcolor:"#e74a3b",bimage:"linear-gradient(180deg,#e74a3b 10%,#be2617 100%)"},

  ]
  constructor() { }

  ngOnInit() {
  }

}
