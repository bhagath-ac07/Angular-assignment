import { detachEmbeddedView } from '@angular/core/src/view/view_attach';
import { RecipeService } from './../recipe-service';
import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[];
  
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }

  getDetails(details:Recipe){
    this.recipeService.recipeSelected.emit(details)    
  }
}
