import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-cards',
  templateUrl: './title-cards.component.html',
  styleUrls: ['./title-cards.component.scss']
})
export class TitleCardsComponent implements OnInit {
 @Input() type: String;
  constructor() { }

  ngOnInit() {
  }

}
