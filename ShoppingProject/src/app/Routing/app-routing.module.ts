import { NgModule } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',redirectTo:'/recipe',pathMatch:'full'},
  
   { path:'recipe',component:RecipesComponent},
  { path:'shopping',component:ShoppingListComponent }]

  @NgModule({
      imports:[RouterModule.forRoot(routes)],
      exports:[RouterModule]
  })

export class AppRoutingModule{

}