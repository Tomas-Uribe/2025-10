import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { recipeData } from '../recipeData';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  selected: Boolean = false;
  selectedRecipe: Recipe | null = null;

  constructor(private recipeService: RecipeService, private router:Router) {}

  getrecipes(): void {
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data;
    });
  }

  ngOnInit() {
    this.getrecipes();
  }

  onSelect(recipe: Recipe) {
    this.router.navigate(['/recipe', recipe.id]);
  }
}
