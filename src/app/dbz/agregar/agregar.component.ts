import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  @Input('data') personajesHijo:Personaje[] = []
  nuevoHeroe: Personaje = {
    nombre: '',
    poder: 0,
  };
  agregar() {
    if (!this.nuevoHeroe.nombre.trim() || !this.nuevoHeroe.poder===null) return;
    this.personajesHijo.push(this.nuevoHeroe);
    this.nuevoHeroe = {
      nombre: '',
      poder: null,
    };
  }
}
