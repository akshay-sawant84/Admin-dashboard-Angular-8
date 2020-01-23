import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards4',
  templateUrl: './cards4.component.html',
  styleUrls: ['./cards4.component.scss']
})
export class Cards4Component implements OnInit {
  @Input() card: any = {
    title: '',
    value: 0,
    color: '',
  };
  constructor() { }

  ngOnInit() {  
  }

}
