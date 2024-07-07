import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonajesComponent } from '../personajes/personajes.component';
import { Personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, PersonajesComponent, AgregarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  providers: [DbzService],
})
export class MainPageComponent {
  public nuevoPersonaje: Personaje = {
    nombre: 'Rochi',
    poder: 234,
  };
  /*   public manejarNuevoPersonaje (personajeEmitido: Personaje) {
    this.personajesPadre.push(personajeEmitido)
  } */
}
