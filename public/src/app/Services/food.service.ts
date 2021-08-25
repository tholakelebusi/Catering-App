import { Injectable } from '@angular/core';
import { FullMealPage } from '../Components/Food/full-meal/full-meal.page';
import { Food } from '../Modals/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  private Foodfull:Food []=[{pic:"https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?cs=srgb&dl=pexels-rajesh-tp-1624487.jpg&fm=jpg",
  name:"Chicken Rice",
price:"R300",
discription:"Ribs and Veggies"},
{pic:"https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name:"Chicken Rice",
price:"R300",
discription:"Salad Chicken"},
{pic:"https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  name:"Chicken Rice",
price:"R300",
discription:"Bear"},
{pic:"https://images.pexels.com/photos/667986/pexels-photo-667986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  name:"Chicken Rice",
price:"R300",
discription:"Juice"},
{pic:"https://images.pexels.com/photos/161440/smoothie-fruit-vegetables-salad-beetroot-carrots-161440.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  name:"Chicken Rice",
price:"R300",
discription:"Wine"},
{pic:"https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500;",
  name:"Chicken Rice",
price:"R300",
discription:"Rice and Chicken"}]




getFood(): Food [] {
  return this.Foodfull;
}

private deco:Food []=[{pic:"https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  name:"Chicken Rice",
price:"R300",
discription:"Ribs and Veggies"},
{pic:"https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  name:"Chicken Rice",
price:"R300",
discription:"Salad Chicken"},
{pic:"https://images.pexels.com/photos/265940/pexels-photo-265940.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  name:"Chicken Rice",
price:"R300",
discription:"Ribs and Veggies"},
{pic:"https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  name:"Chicken Rice",
price:"R300",
discription:"Salad Chicken"}]

getDeco(): Food [] {
  return this.deco;
}

}
