import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MainPageComponent } from './dbz/main-page/main-page.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports:[HeroesComponent,RouterOutlet,MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
