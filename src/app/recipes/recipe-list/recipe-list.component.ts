import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Dummy Description', 'http://images.media-allrecipes.com/images/71112.jpg'),
    new Recipe('A Test Recipe2', 'Dummy Description', 'http://images.media-allrecipes.com/images/71112.jpg'),
    new Recipe('A Test Recipe3', 'Dummy Description', 'http://images.media-allrecipes.com/images/71112.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
