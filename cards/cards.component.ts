import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards = [
    { id: 1, title: "Earnings(Monthly)", value:40000,earn:"$", color:'#4e73df'},
    { id: 2, title: "Earnings (Annual)", value: 215000,earn:"$",color:'#1cc88a' },
    { id: 3, title: "Tasks", value: 50,percen:"%",color:'#f6c23e' },
    { id: 4, title: "Pending Requests", value: 18,color:'#e74a3b' }
  ]

  defaults=[
    {id:1,header:"Default Card Example", p:"This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example."},
  {id:2, header:"Basic Card Example", p:"The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!",color:'#4e73df',font:'600'}
]

   toggle=[
     {id:1,header:"Dropdown Card Example",p:"Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu."},
     {id:2, header:"Collapsable Card Example",p:"This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!"}
    ] 
  constructor() { }

  ngOnInit() {
  }

  
}
