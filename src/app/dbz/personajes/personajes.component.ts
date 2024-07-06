import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
 @Input() personajesHijo:Personaje[] = []
}
