import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonajesComponent } from '../personajes/personajes.component';
import { Personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,PersonajesComponent,AgregarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  personajesPadre: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Krilin',
      poder: 500,
    },
    {
      nombre: 'Chamcha',
      poder: 0,
    },
  ]; 
}
