import { Ingredient } from './../shared/ingredient.model';
export class ShoppingService {
    ingredients: Ingredient[] = [new Ingredient('apple', 10), new Ingredient('Tomato', 12)];
    addItems(items: Ingredient) {
        this.ingredients.push(items);
    }
    getItems(){
        return this.ingredients;
    }

}
