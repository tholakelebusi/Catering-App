import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/Services/food.service';

@Component({
  selector: 'app-platters',
  templateUrl: './platters.page.html',
  styleUrls: ['./platters.page.scss'],
})
export class PlattersPage implements OnInit {

  food:any;
  constructor(public foodService:FoodService) { }

  ngOnInit() {
    this.food=this.foodService.getDeco;
  }

}
