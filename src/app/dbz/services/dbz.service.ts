import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
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
get personajesService(): Personaje[]{
  return [...this._personajes]
}
  constructor() {
    console.log('Esto esta funcionando');
  }
  public agregarPersonaje(personaje:Personaje):void {
   this._personajes.push(personaje)
    console.log(this._personajes);
    
  }
}
