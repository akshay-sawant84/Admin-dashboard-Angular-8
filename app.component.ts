import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adminpanel';
  //card = {title: 'Hi', value: 34};
  cards = [
    { id: 1, title: "Earnings(Monthly)", value:40000,earn:"$", color:'#4e73df'},
    { id: 2, title: "Earnings (Annual)", value: 215000,earn:"$",color:'#1cc88a' },
    { id: 3, title: "Tasks", value: 50,percen:"%",color:'#f6c23e' },
    { id: 4, title: "Pending Requests", value: 18,color:'#e74a3b' }
  ]

}
