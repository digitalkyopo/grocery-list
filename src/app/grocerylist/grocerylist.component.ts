import { Component, OnInit } from '@angular/core';
import {Grocery} from '../grocery'

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent implements OnInit {
  grocery = Grocery = {
    id: 1;
    name: 'Cabbage';
  }
  constructor() { }
  
  ngOnInit() {
  }

}
