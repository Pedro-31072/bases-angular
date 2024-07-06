import { Component } from '@angular/core';

import { CommonModule,NgFor } from '@angular/common';
@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  public heroes:string[] = ["Thor, Capitan America","SpiderMan","Tony Stark"]
  public heroeBorrado:string="No hay heroes borrados"
  borrarHeroe():void{
    this.heroeBorrado= this.heroes.pop() || "no hay heroes borrados"
  }
}
