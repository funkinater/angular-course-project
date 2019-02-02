import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe('Test Recipe','This is simply a test recipe','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('Anover One','This recipe is a good one.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiT70S9q5Glv3aT_55giatS9OPqe8YgGlpgRQDMdc4D7KIsa18')
  ];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
