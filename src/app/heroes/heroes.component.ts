import { Component } from '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports:[HeroeComponent,ListadoComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

}
