import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { FormsModule } from '@angular/forms';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  @Input() nuevoHeroe: Personaje = {
    nombre: '',
    poder: 0,
  };
  constructor(private readonly dbzService:DbzService){}
  /* @Output() onEmitirNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter() */
  agregar() {
    if (!this.nuevoHeroe.nombre.trim() || !this.nuevoHeroe.poder===null) return;
    /* this.onEmitirNuevoPersonaje.emit(this.nuevoHeroe) */
    this.dbzService.agregarPersonaje(this.nuevoHeroe)
    this.nuevoHeroe = {
      nombre: '',
      poder: 0,
    };
  }
}
