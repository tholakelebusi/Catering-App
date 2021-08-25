import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/Services/food.service';

@Component({
  selector: 'app-full-meal',
  templateUrl: './full-meal.page.html',
  styleUrls: ['./full-meal.page.scss'],
})
export class FullMealPage implements OnInit {

  food:any;
  constructor(public foodService:FoodService) { }

  ngOnInit() {
    this.food=this.foodService.getFood();
  }

}
