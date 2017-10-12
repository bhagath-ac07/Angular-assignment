import { ShoppingService } from '../shopping-service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
  }
  addIngredient(name:string,ammount:number){
    this.shoppingService.addItems(new Ingredient(name,ammount));
  }

}
