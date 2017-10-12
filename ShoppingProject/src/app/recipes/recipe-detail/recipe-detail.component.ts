import { RecipeService } from './../recipe-service';
import { element } from 'protractor';
import { ShoppingService } from '../../shopping-list/shopping-service';
import { Recipe } from './../recipe.model';
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;
  constructor(private shoppingService:ShoppingService,private recipeService:RecipeService) { }
  dropdownFlag=true;
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{
      
      //this.recipe=recipe;

    });

  }
  addToShoppingList(){
    this.recipe.ingredient.forEach(element => {
      this.shoppingService.addItems(element);          
    });
    
  }
  

}
