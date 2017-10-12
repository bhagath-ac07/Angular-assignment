import { Data, Router } from '@angular/router';
import { RecipeService } from './recipe-service';
import { Component, OnInit } from '@angular/core';
import {Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]

})
export class RecipesComponent implements OnInit {
  recipeDetail:Recipe;
  constructor(private recipeService:RecipeService,private route:Router) { }

  ngOnInit() {
    this.recipeDetail=this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{this.recipeDetail=recipe});
  }

}
