import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() itemSelected = new EventEmitter<void>();
  @Input() rItem:Recipe;

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelection(selectedRecipe: Recipe) {
    this.itemSelected.emit();
  }
}
