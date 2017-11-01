import { Component } from '@angular/core';
/*
 * Component Decorator:
 *  requires selector and templateUrl
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Heroes App";
  hero: Hero = {
    name: "Windstrom",
    id: 1, 
    powerRating: 10.0
  }
}
export class Hero {
  name: string;
  id: number;
  powerRating: number;
};